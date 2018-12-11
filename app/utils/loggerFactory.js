/* eslint-disable import/no-mutable-exports, class-methods-use-this */
let LoggerClass;

if (process.browser) {
  LoggerClass = class Logger {
    getLogger() {
      return {
        log: () => {},
        warn: () => {},
        info: () => {},
        error: () => {},
        debug: () => {},
      };
    }
  };
} else {
  /* eslint-disable global-require */
  const os = require('os');
  const Winston = require('winston');
  const { Rotate } = require('winston-logrotate');
  /* eslint-enable global-require */

  /**
   * Logger class to fetch instances for logging with custom formatting enabled
   */
  LoggerClass = class Logger {
    constructor({ fileName = 'logs/error.log' } = {}) {
      this.fileName = fileName;
      this.logPrefix = this.getLogPrefix();
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
     * Achieve the following format for timestamp:
     * 2017-05-23 11:35:43.673
     *
     * @returns {String} Formatted Date string
     */
    getTimeStampFormat() {
      const date = new Date();
      return `${date.toLocaleString()}.${date.getMilliseconds()}`;
    }

    /**
     * Achieve the following format for the log statement:
     * 2017-05-23 12:25:54.292 [<LOG_PREFIX>] [SESSION ID: <SESSION_ID>]
     * [REQUEST ID: <REQUEST_ID>] [<LOG_LEVEL>] [<LOGGER_NAME>] - <MESSAGE>
     *
     * @param {Object} options Winston options for custom formatting
     * @returns {String} Custom logging format
     */
    getFormatterString(options) {
      // TODO: add request identifier string post discussion on format (removed as
      // currently undefined)
      const { sessionId } = this;
      const logLine = `|LOG_LINE| ${this.timestampFormat()} [${options.level.toUpperCase()}] [${
        this.logPrefix
      }] ${this.getRequestIdentifierString({ sessionId })} [${this.loggerName}] - ${
        options.message ? options.message : ''
      }`;
      return logLine;
    }

    /**
     * Get the logger instance with request identifiers as part of formatter
     *
     * @param {String} loggerName Name to identify the log initiator
     */
    getLogger({ sessionId, loggerName = 'default' } = {}) {
      const self = this;

      const loggerInstance = Winston.createLogger({
        transports: [
          new Rotate({
            file: self.fileName,
            colorize: false,
            timestamp: true,
            size: '500m',
            keep: 5,
            json: false,
            compress: false,
            tailable: true,
            formatter: self.getFormatterString.bind(
              Object.assign(self, {
                loggerName,
                timestampFormat: self.getTimeStampFormat.bind(self),
                level: process.env.LOG_LEVEL || 'error',
                sessionId,
              })
            ),
          }),
        ],
      });
      return loggerInstance;
    }
  };
}

module.exports = LoggerClass;
