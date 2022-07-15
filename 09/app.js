const http = require('node:http');

const createApp = () => {
  return http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body>Welcome to the World Wide Web!</body></html>');
  });
};

module.exports = createApp;
