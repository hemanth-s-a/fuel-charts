var express = require('express'),
	app		= express(),
	server,
	host,
	port;

app.get('/', function (req, res) {
	res.send("Hello World!");
});

server = app.listen(9001, function () {
	host = server.address().address,
	port = server.address().port;
});

console.log("Listening at http://%s:%s", host, port);