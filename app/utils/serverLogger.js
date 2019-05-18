const os = require('os');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

/* eslint-enable global-require */

/**
 * Logger class to fetch instances for logging with custom formatting enabled
 */
class LoggerClass {
  constructor({ fileName = 'logs/error.log' } = {}) {
    const self = this;
    this.fileName = fileName;
    this.logPrefix = this.getLogPrefix();

    this.transports = new transports.DailyRotateFile({
      filename: self.fileName,
      zippedArchive: true,
      maxSize: '500m',
      maxFiles: '5',
    });
  }

  /**
   * Get the prefix for the log statement containing the log
   * prefix from environment (if available) and the hostname
   *
   * @returns {String} Prefix for the logging statement
   */
  getLogPrefix() {
    const hostName = os.hostname().toUpperCase();
    const logPrefix = process.env.LOG_PREFIX || 'DEFAULT_PREFIX';
    return `${logPrefix}|${hostName}`;
  }

  /**
   * Get the request identifier string for the log statement
   * consisting of the session id and the request id
   *
   * @param {Object} requestIdentifiers Request identifiers as received in the constructor
   * @returns {String} String consisting of session id and request id as available
   */
  getRequestIdentifierString({ sessionId } = {}) {
    return sessionId ? ` [SESSION ID: ${sessionId}]` : '';
  }

  /**
   * Get the logger instance with request identifiers as part of formatter
   *
   * @param {String} loggerName Name to identify the log initiator
   */
  getLogger({ sessionId, loggerName } = {}) {
    const self = this;
    const { combine, timestamp: timeStamp, colorize, printf } = format;
    const loggername = loggerName || this.loggerName || 'default';

    const msgFormat = printf(({ level, message, label, timestamp, obj }) => {
      console.log({ level, message, label, timestamp, obj }); //eslint-disable-line
      const { sessionId: sessionGlobal } = self;
      const sessionNumber = sessionId || sessionGlobal;
      return `${timestamp} [${label}] ${level} [${
        this.logPrefix
      }] ${this.getRequestIdentifierString({ sessionNumber })} [${loggername}]: ${message}`;
    });

    const loggerInstance = createLogger({
      level: process.env.LOG_LEVEL || 'error',
      filename: self.fileName,
      format: combine(timeStamp(), colorize(), msgFormat),
      transports: [self.transports],
    });
    return loggerInstance;
  }
}

module.exports = LoggerClass;
