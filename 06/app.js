const http = require('node:http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ location: 'Mars' }));
});

server.listen(3000, () => console.log('server running'));

// Content-Length: 19
