const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
	if (req.url === '/') {
		let path = `${__dirname}/index.html`;
		fs.createReadStream(path).pipe(res);
	}
	else if (req.url === '/api') {
		res.writeHead(200, {'Content-Type': 'application/json'});

		let path = `${__dirname}/index.html`;

		let obj = {
			brick: 'soup',
			chair: 'tree',
			tree: 'doug'
		};

		res.end(JSON.stringify(obj));
	}
	else {
		res.writeHead(404);
		res.end();
	}

}).listen(1337, '127.0.0.1');