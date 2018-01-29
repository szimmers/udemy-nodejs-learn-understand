const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// route all asset requests to public folder
const publicpath = __dirname + '/public';
app.use('/assets', express.static(publicpath));

// custom middleware
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);
	next();
});

app.get('/', function(req, res) {
	//res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body>hi</body></html>');
	// hm, seems we can get away w/o double-quotes in here.
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body>hi</body></html>');
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