var http = require('http');

http.createServer(function (req, res) {
  res.write("BOT RUNNING ON PORT:${port}");
  res.end();
}).listen(8080); 
