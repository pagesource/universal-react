const Agent = require('agentkeepalive');

const keepAliveSettings = {
  maxSockets: +process.env.MAX_SOCKETS,
  keepAlive: true,
  maxFreeSockets: +process.env.MAX_FREE_SOCKETS,
  keepAliveMsecs: +process.env.KEEP_ALIVE_MSECS,
  timeout: +process.env.API_TIMEOUT,
  keepAliveTimeout: +process.env.KEEP_ALIVE_TIMEOUT,
};

module.exports = {
  http: new Agent(keepAliveSettings),
  https: new Agent.HttpsAgent(keepAliveSettings),
};
