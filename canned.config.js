const canned = require('canned');
const http = require('http');

const opts = {
  logger: process.stdout,
  cors: true,
  cors_headers: ['Content-Type', 'Location'],
};

const can = canned('./mock', opts);

http.createServer(can).listen(9876);
