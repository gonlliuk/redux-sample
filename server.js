var express = require('express');
var http = require('http');
var path = require('path');

var __public = './dist/';
var port = 3000

var app = express();

app.use(express.static(path.join(__dirname, __public)));

app.use('/*', function(req, res) {
  return res.sendFile(path.join(__dirname, __public, 'index.html'));
});

var server  = http.createServer(app);

server.listen(port);
