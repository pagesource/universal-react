import { setConfig } from 'next/config';

const publicRuntimeConfig = {
  metricsKey: process.env.ENV_API_KEY === process.env.PROD_KEY ? 'prod' : 'dev',
  isCachingEnabled: process.env.CACHE_ENABLED !== 'false',
  isProd: process.env.PROD_ENV === 'true',
};

setConfig(publicRuntimeConfig);

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
