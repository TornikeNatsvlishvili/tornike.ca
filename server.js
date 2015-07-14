var express = require('express');
var app     = express();

var PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('./public/pages/index.html');
});

app.listen(PORT);
console.log('Started server on port: ' + PORT);