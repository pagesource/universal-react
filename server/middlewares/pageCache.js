const apiCache = require('apicache');
const redis = require('redis');

const redisFragmentCacheConfig = require('../config/appConfig').REDIS_FRAGMENT_CACHE_CONFIG;
const pageCacheList = require('../config/pageCacheConfig');

const siteIdHeader = 'x-site-id';
const byPassPageCache = 'x-apicache-bypass';

// List of routes which implicitly signifies No-Caching
const excludeCacheList = [];

// Function to have custom cache key
const appendKey = req => req.method + siteIdHeader;

// An HOC which takes in req and res params and returns boolean signifying whether to cache or not
const shouldCache = (req, res) => res.statusCode === 200;

// redis Client
const redisClient = redisFragmentCacheConfig.enabled
  ? redis.createClient({
      host: redisFragmentCacheConfig.ip,
      port: redisFragmentCacheConfig.port,
      no_ready_check: true,
    })
  : undefined;

const cache = apiCache.options({
  debug: redisFragmentCacheConfig.debug,
  appendKey,
  redisClient,
}).middleware;

const cachePages = (app, callback) => {
  pageCacheList.forEach(cacheObj => {
    const cacheSuccess = cache(cacheObj.ttl, shouldCache);
    app.get(cacheObj.route, cacheSuccess, callback);
  });
};

// A function which takes in req and res params and returns boolean signifying whether to cache or not
const addNoCacheHeader = (req, res, next) => {
  req.headers[byPassPageCache] = true;
  next();
};

const bustPageCache = target => {
  if (redisClient) {
    redisClient.flushdb();
  }
  apiCache.clear(target || '');
};

const getCacheIndex = res => {
  const cacheIndex = {};
  if (redisClient) {
    redisClient.keys('*', (err, keys) => {
      cacheIndex.memCacheIndex = apiCache.getIndex();
      cacheIndex.redisIndex = keys;
      res.json(cacheIndex);
    });
  } else {
    cacheIndex.memCacheIndex = apiCache.getIndex();
    res.json(cacheIndex);
  }
};

const excludeRequestsFromNodeCache = app => {
  excludeCacheList.forEach(route => {
    app.get(route, addNoCacheHeader);
  });
};

if (redisClient) {
  redisClient.on('error', err => {
    console.log(`Redis-Error ${err}`);
  });
}

module.exports = { cachePages, bustPageCache, excludeRequestsFromNodeCache, getCacheIndex };
