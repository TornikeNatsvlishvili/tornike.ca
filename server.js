var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/pages/index.html');
})

app.get('/ping', function(req, res){
    res.json("pong");
})

app.get('/notes', function(req, res){
    res.json("hi")
})

var port = process.env.PORT || 8080;
http.createServer(app).listen(port);
