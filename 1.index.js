/*
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
	response.send('<h1>Hello World</h1>')
});

http.listen(5000, function(){
	console.log('listening on *:5000')
});
*/

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/1.ajax_example.html');

});



http.listen(5000, function(){
	console.log('listening on *:5000');
});