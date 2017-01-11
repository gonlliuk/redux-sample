var express = require('express');
var app = express();
var path = require('path');

var __public = 'dist/'

app.use(express.static(path.join(__dirname, __public)));

app.use('*', function (req, res) {
  return res.sendFile(path.join(__dirname, __public + 'index.html'));
});

app.listen(3000, function () {});