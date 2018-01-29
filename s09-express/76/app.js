const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// route all asset requests to public folder
const publicpath = __dirname + '/public';
app.use('/assets', express.static(publicpath));

// template engine
app.set('view engine', 'ejs');

// custom middleware
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', {ID: req.params.id});
});

app.get('/api', function(req, res) {
	res.json({
		brick: 'chair'
	});
});

app.listen(port);