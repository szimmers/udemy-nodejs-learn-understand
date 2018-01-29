const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	let path = `${__dirname}/index.html`;

	// can simply pipe stream to res, which is a stream
	fs.createReadStream(path).pipe(res);

}).listen(1337, '127.0.0.1');