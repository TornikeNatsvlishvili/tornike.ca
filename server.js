var http = require('http');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
/*
var PORT = parseInt(process.env.PORT) || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    //res.sendfile('/public/pages/index.html', { root: __dirname });
});
app.get('/ping', function(req, res){
    res.json("pong");
})

http.createServer(app).listen(PORT);*/