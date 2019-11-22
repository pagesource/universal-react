const canned = require('canned');
const http = require('http');

console.log(canned);
const opts = {
  logger: process.stdout,
  cors: true,
  cors_headers: ['Content-Type', 'application/json'],
  wildcard: 'any',
};

const can = canned('./mock', opts);
http.createServer(can).listen(9876);
