const http = require('http');
const fileSystem = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  var filePath = path.join(__dirname, 'app.html');
  var stat = fileSystem.statSync(filePath);

  res.setHeader('Content-Type', 'text/html');

  var readStream = fileSystem.createReadStream(filePath);

  readStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});