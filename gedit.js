var http = require('http');

var hostname = 'localhost';

var port = 3000;

var server = http.createServer(function (request, response){
	response.statusCode=200;
	response.setHeader('Content-Type', 'text/plain');
	response.end('Hello world\n');
	});
	
	server.listen(port, hostname, function(){
	console.log('Server running at http://' + hostname + ':' + port + '/');
	});

