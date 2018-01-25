const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
	console.log(`${req.url}...`);
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	let path = `${__dirname}/index.html`;
	// providing the encoding type coverts it from buffer to string
	let html = fs.readFileSync(path, 'utf8');
	let message = 'i like soup';
	html = html.replace('{message}', message);

	res.end(html);

}).listen(1337, '127.0.0.1');