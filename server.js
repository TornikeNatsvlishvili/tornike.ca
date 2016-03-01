var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

// Web routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/pages/index.html');
})
app.get('/notes', function(req, res){
    res.sendFile(__dirname + '/public/pages/notes.html')
})
app.get('/ping', function(req, res){
    res.json("pong");
})

// Api routes
var noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);

var port = process.env.PORT || 8080;
http.createServer(app).listen(port);
