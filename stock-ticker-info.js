var http = require('http');
var port = process.env.PORT || 3000;

console.log("this goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>hello world</h2>");
  res.write("success! This app is deployed online");
  res.end();
}).listen(port);


