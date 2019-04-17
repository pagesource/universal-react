/* eslint-disable no-param-reassign */
const proxy = require('http-proxy-middleware');
const { PROTOCOL_HTTPS } = require('../../isomorphic/constants');
const agent = require('./proxyAgent');

const { API_DOMAIN } = process.env;
const domainProtocol = API_DOMAIN.split(':')[0];
const isMock = process.argv.indexOf('--mock') !== -1;
/**
 * Settings for request agent (keep alive)
 * (externalized through environment variables)
 */

// Assign agent as per protocol of API domain
const proxyAgent = domainProtocol === PROTOCOL_HTTPS && !isMock ? agent.https : agent.http;

// proxy middleware options
const apiProxy = proxy({
  agent: proxyAgent,
  target: isMock ? process.env.MOCK_API_DOMAIN : process.env.API_DOMAIN, // target host
  pathRewrite: { '^/api': '' },
  logLevel: 'debug',
  changeOrigin: true, // for vhosted sites
  headers: {
    'secret-key': process.env.API_SECRET_KEY,
  },
  onError: (err, req, res) => {
    res.status(500).send({
      success: false,
      error: err,
    });
  },
  proxyTimeout: parseInt(process.env.API_TIMEOUT, 10),
});

module.exports = apiProxy;
