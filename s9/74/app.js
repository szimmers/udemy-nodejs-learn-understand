const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.end();
});

app.get('/person/:id', function(req, res) {
	res.send(req.params.id);
});

app.get('/api', function(req, res) {
	res.json({
		brick: 'chair'
	});
});

app.listen(port);