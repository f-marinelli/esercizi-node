const http = require('node:http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    `    <html>
      <body>
        <h1>Esercizio 05</h1>
      </body>
    </html>`
  );
});

server.listen(3000, () => console.log('server running'));
