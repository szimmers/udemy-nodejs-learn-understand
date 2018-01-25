const http = require('http');

http.createServer(function(req, res) {
	console.log(`${req.url}...`);
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end('howdy\n');

}).listen(1337, '127.0.0.1');