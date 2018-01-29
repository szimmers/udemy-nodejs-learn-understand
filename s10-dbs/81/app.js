const express = require('express');
const mysql = require('mysql');

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

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

	let conn = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "foo"
	});

	let query = 'select * from larry';
	conn.query(query, function(err, rows) {
		if (err) {
			throw err;
		}

		// this will be an array of JS objects
		console.log(rows);
	});

	next();
});

apiController(app);
htmlController(app);

app.listen(port);