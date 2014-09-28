var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.type('text/json');
    res.send('{test: test123}');
});

app.get('/this', function(req, res){
   res.type('text/json');
   res.send('{test: test}');
});

app.listen(3000, function(){
    console.log('Application Started, Listening on Port 3000 \n');
});