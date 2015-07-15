var http = require('http');
var express = require('express');

var app = express();

var PORT = parseInt(process.env.PORT) || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('/public/pages/index.html', { root: __dirname });
});

app.get('/ping', function(req, res){
    res.json("pong");
})

http.createServer(app).listen(PORT);
console.log(stringify( process.env ));