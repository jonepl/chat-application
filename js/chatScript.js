jQuery(function($){
	// passed by socket.io.js import script
	var socket = io.connect();
	var $messageForm = $('#send-message');
	var $messageBox = $('#message');
	var $chat = $('#chat');

	$messageForm.submit(function(e){
		e.preventDefault();
		//Sends an evernt to the server (can be a a json)
		socket.emit('send message', $messageBox.val());
		$messageBox.val('');
	});
	/* Receive the message on the client side */
	socket.on('new message' ,function(data){
		/* Displays the message using jQuery*/
		$chat.append(data + "<br/>");

	});
});