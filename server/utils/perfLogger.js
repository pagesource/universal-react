/**
 * Logger Module
 */
const fs = require('fs');
const CustomLogger = require('../../app/utils/loggerFactory');

const perfPath = './logs';
const perfLogger = new CustomLogger({ fileName: `${perfPath}/perf.log` });

if (!fs.existsSync(perfPath)) {
  fs.mkdirSync(perfPath);
}

module.exports = function getPerfLoggerFactory(options) {
  return perfLogger.getLogger(options);
};
