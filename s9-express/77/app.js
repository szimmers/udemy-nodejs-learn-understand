const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({extended: false});

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

// e.g. http://localhost:3000/person/77x?foo=bar
app.get('/person/:id', function(req, res) {
	res.render('person', {ID: req.params.id, foo: req.query.foo});
});

app.post('/person/', urlencodedParser, function(req, res) {
	res.send('danke');
	console.log(req.body);
});

app.get('/api', function(req, res) {
	res.json({
		brick: 'chair'
	});
});

app.listen(port);