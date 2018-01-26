const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});

	let path = `${__dirname}/index.html`;

	let obj = {
		brick: 'soup',
		chair: 'tree'
	};

	res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');