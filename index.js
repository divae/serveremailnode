var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function(){
  console.log('Magic is happening on port 5000');
});

exports.closeServer = function(){
  server.close();
};
