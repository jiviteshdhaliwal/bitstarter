var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var stringBuf = fs.readFileSync('/home/jivitesh/startup/bitstarter/index.html');

app.get('/', function(request, response, stringBuf) {
  response.send(stringBuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
