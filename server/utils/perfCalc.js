const { EventEmitter } = require('events');

// Aggregate all profiler results into an event emitter to make
// handling the results generic
const profiles = new EventEmitter();
profiles.on('route', ({ req, elapsedMS }) => {
  if (req.perfLoggerEnabled) {
    req.perfLogger.log(
      'error',
      `[PERFLOG] [SERVICE] Method: ${req.method} URL: ${req.url} Elapsed Time: ${elapsedMS}ms`,
    );
  }
});

const blackListUrls = ['_next', 'webassets', 'static'];

const requestTime = (req, res, next) => {
  if (!new RegExp(blackListUrls.join('|')).test(req.path)) {
    req.startTime = Date.now();

    const emitRoute = () => {
      // Emit an object that contains the original request and the elapsed time in MS
      profiles.emit('route', { req, elapsedMS: Date.now() - req.startTime });
    };

    // The 'finish' event will emit once the response is done sending
    res.once('finish', emitRoute);
  }
  next();
};

module.exports = requestTime;
