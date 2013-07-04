var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readFile = fs.readFile('index.html', {encoding : 'utf-8'});

app.get('/', function(request, response) {
  response.send(readFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
