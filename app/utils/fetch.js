// @flow
import axios from 'axios';
import es6promise from 'es6-promise';
import getConfig from 'next/config';
import agent from '../../server/utils/proxyAgent';
import loggerFactory from './logger';
import { DESKTOP, ENV_DEVELOPMENT, RESPONSE_OK, RESPONSE_SERVER_ERROR } from '../constants';
import { CACHEABLE_SERVICES_LIST } from './cacheableServices';

const { publicRuntimeConfig } = getConfig();

const API_HOSTS = require('../../API_HOST').environment;

const logger = loggerFactory.getLogger();

es6promise.polyfill();

class ServiceUtils {
  currentDevice: string;

  environment: string;

  clientPathPrefix: string;

  serverPathPrefix: string;

  envApiKey: string;

  constructor() {
    this.envApiKey = process.env.ENV_API_KEY || '';
    this.environment = process.env.NODE_ENV || ENV_DEVELOPMENT;
    this.clientPathPrefix = process.env.API_PROXY_PATH || '';
    this.serverPathPrefix = process.env.API_DOMAIN || '';
    this.currentDevice = DESKTOP;

    /**
     * Condition checks:
     * 1. API hosts map is available on the root
     * 2. environment variable defined for <host_datacenter>
     * 3. <host_datacenter> entry available in hosts file
     */
    if (
      typeof API_HOSTS !== 'undefined' &&
      this.envApiKey &&
      typeof API_HOSTS[this.envApiKey] !== 'undefined'
    ) {
      this.serverPathPrefix = API_HOSTS[this.envApiKey];
    }
  }

  setDeviceType(device: string): void {
    this.currentDevice = device;
  }

  getServerPathPrefix(): string {
    return this.serverPathPrefix;
  }

  static appendParams(url: string, requestData?: Object): string {
    let appendedURL: string = url;
    if (requestData) {
      if (url.indexOf('?') < 0) appendedURL = url.concat('?');
      appendedURL = appendedURL.concat(`device=${requestData.deviceType}`);
    }
    return appendedURL;
  }

  /* eslint-disable */
  fetch = async (url: string, actionObject?: Object, additionalFetchOptions?: Object) => {
    let headers = {};
    let fetchUrl: string;
    const start = Date.now();
    let perfLogger;
    let response = {};
    let responseData;
    const isCacheableService =
      CACHEABLE_SERVICES_LIST.indexOf(url.split('?')[0]) !== -1 &&
      publicRuntimeConfig.isCachingEnabled;
    const apiTimeout = +process.env.API_TIMEOUT;
    const isClient = typeof window !== 'undefined';

    if (isClient) {
      // Client-side call
      fetchUrl = ServiceUtils.appendParams(`${this.clientPathPrefix}${url}`);
    } else if (!(actionObject && actionObject.type)) {
      // Server-side call from initial actions (with no action object)
      throw new Error(
        `Oh oh, maybe you forgot adding your action object to your fetch in your saga with url ${url}?`
      );
    } else {
      // Server-side call with proper action object from initial actions
      headers = {
        // Cookie: actionObject.requestDetails.cookies || '',
        'secret-key': '$2a$10$f43a7fmsIv/2DNbFTzfiyeGv1mORmjYNbTqqCM.BJ/JuaIxFHZ.Ou',
        // ...actionObject.requestDetails.whitelistedHeaders,
      };
      perfLogger = actionObject.requestDetails.logger;
      fetchUrl = ServiceUtils.appendParams(
        `${this.serverPathPrefix}${url}`,
        actionObject.requestDetails
      );

      try {
        if (isCacheableService) {
          const cachedResponse = global.servicesCache.get(`${fetchUrl}`);
          if (cachedResponse !== null) {
            perfLogger.log(
              'error',
              `[PERFLOG] [CACHE: HIT] URL: ${fetchUrl} Elapsed Time: ${Date.now() - start}ms`
            );
            return cachedResponse;
          }
        }
      } catch (err) {
        logger.error(`[CACHE] Failed to fetch from cache: ${fetchUrl}`, err);
      }
    }

    // Request options in axios format
    const reqOptions = {
      url: fetchUrl,
      headers,
      timeout: apiTimeout,
      withCredentials: true,
      ...additionalFetchOptions,
    };

    // Add https agent for requests that start with https protocol in url
    if (fetchUrl.startsWith('https')) {
      reqOptions.agent = agent.https;
    }

    try {
      response = await axios(reqOptions);
      responseData = response.data;
    } catch (err) {
      responseData = {
        status: RESPONSE_SERVER_ERROR,
        error: err.message,
      };
    }

    try {
      if (!isClient && response.status === RESPONSE_OK && isCacheableService) {
        global.servicesCache.put(
          // Cache in the form "service_cache:<url>"
          `${fetchUrl}`,

          // Cacheable response data
          responseData
        );
      }
    } catch (err) {
      logger.error(`[CACHE] Failed to cache: ${fetchUrl}`, err);
    }

    if (perfLogger) {
      perfLogger.log(
        'error',
        `[PERFLOG] [SERVICE] ${isCacheableService ? '[CACHE: MISS]' : ''} Status: ${
          response.status
        } Method: ${reqOptions.method || 'GET'} URL: ${fetchUrl} Elapsed Time: ${Date.now() -
          start}ms`
      );
    }

    return responseData;
  };
  /* eslint-enable */
}

export default new ServiceUtils();
