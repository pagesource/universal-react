import getConfig from 'next/config';
import Router from 'next/router';

export const convertObjectToArray = (obj, takeKeys) =>
  Array.prototype.concat.apply([], takeKeys ? Object.keys(obj) : Object.values(obj));

export const pushQueryToHistory = ({
  route,
  asUrl,
  routeQuery,
  pageQuery,
  newQuery,
  shallow,
  replace,
}) => {
  const query = pageQuery ? { ...pageQuery.toJS(), ...newQuery } : { ...newQuery };
  const pathname = window.location.href.split('?')[0];
  const queryString = Object.keys(query).reduce(
    (accumulator, currentValue) =>
      query[currentValue]
        ? `${accumulator}${currentValue}=${
            query[currentValue] !== decodeURIComponent(query[currentValue])
              ? query[currentValue]
              : encodeURIComponent(query[currentValue])
          }&`
        : accumulator,
    '?'
  );

  let search = queryString.substr(0, queryString.length - 1);
  search = search !== '?' ? search : undefined;
  const url = asUrl || pathname + search;

  const promise = replace
    ? Router.replace({ pathname: route, query: routeQuery }, url, {
        shallow: !!shallow,
      })
    : Router.push({ pathname: route, query: routeQuery }, url, {
        shallow: !!shallow,
      });
  return {
    newPageUrl: url,
    newPageQuery: query,
    promise,
  };
};

export const parseQueryParams = pathname => {
  const search = pathname.split('?')[1];
  if (search) {
    const queryList = search.split('&');
    return queryList.reduce((accu, curr) => {
      const [key, value] = curr.split('=');
      return { ...accu, [key]: value.split('#')[0] };
    }, {});
  }
  return {};
};

export const cleanObject = obj => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key]) newObj[key] = obj[key];
  });
  return newObj;
};

export const setCookie = (cookieName, cookieValue, expiryDays) => {
  if (typeof window === 'undefined') return;
  let expires = '';
  if (expiryDays) {
    const d = new Date();
    d.setTime((d.getTime() + expiryDays) * (24 * 60 * 60 * 1000));
    expires = `expires=${d.toUTCString()};`;
  }
  document.cookie = `${cookieName}=${cookieValue};${expires}path=/`;
};

export const getCookie = key => {
  if (typeof window === 'undefined') return '';
  return document.cookie.replace(
    new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`),
    '$1'
  );
};

export const createUrlSearchParams = (query = {}) => {
  const queryParams = [];
  const keys = Object.keys(query);
  for (let i = 0, l = keys.length; i < l; i += 1) {
    queryParams.push(`${keys[i]}=${query[keys[i]]}`);
  }
  return queryParams.join('&');
};

export const buildUrl = options => {
  if (typeof options === 'object') {
    const { pathname, query } = options;
    let url = pathname;
    if (typeof query === 'object') {
      url += `?${createUrlSearchParams(query)}`;
    }
    return url;
  }
  return options;
};

export const removeChar = (str, ch) => {
  if (!str || !ch) return str;
  const reg = new RegExp(`\\${ch}{1,}`, 'gi');
  return str.replace(reg, x => (x === ch ? ' ' : ` ${ch} `));
};

export const elementOffset = el => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export const redirectInactiveUser = ({ pathname, shallow, isUserLoggedIn, signOutUser }) => {
  if (typeof window !== 'undefined') {
    const IDLE_TIMEOUT = process.env.INACTIVE_USER_TIMEOUT_MINUTES;
    let idleSecondsCounter = 0;
    const checkIdleTimeMiliseconds = 10000;
    let idealTime;
    const eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

    const resetTimer = () => {
      idleSecondsCounter = 0;
    };

    const checkIdleTime = () => {
      idleSecondsCounter += checkIdleTimeMiliseconds / 1000;
      if (idleSecondsCounter >= IDLE_TIMEOUT * 60) {
        if (isUserLoggedIn) {
          signOutUser({ pathname }, true);
        } else {
          Router.push({ pathname }, pathname, {
            shallow,
          }).then(() => window.scrollTo(0, 0));
        }
        clearInterval(idealTime);
      }
    };

    idealTime = window.setInterval(checkIdleTime, checkIdleTimeMiliseconds);

    eventTypes.forEach(event => {
      window.addEventListener(event, resetTimer);
    });
  }
};

export const stopTrackingInactiveUser = () => {
  if (typeof window !== 'undefined') {
    const eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    clearInterval(window.idealTime);
    eventTypes.forEach(event => {
      window.removeEventListener(event, null, true);
    });
  }
};

export const isIOS = () => {
  if (typeof window !== 'undefined') {
    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  }
  return false;
};

export const escapeHtml = (text = '') => text.replace(/&#039;/g, "'").replace(/%2C;/g, ',');

export const addDecimal = value => {
  let price = value;
  if (typeof price === 'string') {
    price = parseFloat(value);
  }
  return price.toFixed(2);
};

export const removeDecimal = value => (+value % 1 === 0 ? parseInt(value, 10) : value);

export const debounce = (fn, wait = 100) => {
  let debounceTimer;
  window.onscroll = () => {
    if (debounceTimer) {
      window.clearTimeout(debounceTimer);
    }

    debounceTimer = window.setTimeout(() => {
      fn();
    }, wait);
  };
};

/* eslint-disable no-mixed-operators */
export const throttle = (fn, wait = 100) => {
  let time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};
/* eslint-enable no-mixed-operators */

export const getIsProd = () => {
  const nextConfig = getConfig();
  if (nextConfig) {
    const { publicRuntimeConfig } = nextConfig;
    return publicRuntimeConfig.metricsKey || 'dev';
  }
  return 'dev';
};
