/*var express = require('express');
var app     = express();

var PORT = parseInt(process.env.PORT) || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('./public/pages/index.html');
});

app.get('/ping', function(req, res){
    res.json("pong");
})

app.listen(PORT);
console.log('Started server on port: ' + PORT);*/

var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);