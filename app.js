var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.listen(3000, function() {
  console.log('listening in 3000');
});