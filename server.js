var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000, function(){
	console.log('Listening to PORT:3000');
});

/* Routing for root directory */
app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');
});

/* Routing for the CSS file */
app.get('/css/style.css', function(req,res){
	res.sendFile(__dirname + '/css/style.css');
});

app.get('/js/chatScript.js', function(req,res){
	res.sendFile(__dirname + '/js/chatScript.js');
});

/* Receive message on the server side */
io.sockets.on('connection', function(socket){
	/* Send message to ever other user logged on*/
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});