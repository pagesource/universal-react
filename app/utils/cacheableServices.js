import cacheableServices from './servicesCache.config';

// Array for quick loop if the service is cacheable
/* eslint-disable-next-line import/prefer-default-export */
export const CACHEABLE_SERVICES_LIST = cacheableServices.map(service => service.url);
