var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);


{
  "name": "stock-ticker-info",
  "description": "a really cool app",
  "version": "1.0.0",
  "engines": {
    "node": "20.x"
  }
}
