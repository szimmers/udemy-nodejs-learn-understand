const express = require('express');
const mongoose = require('mongoose');

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect('/some/connection/string');

const Schema = mongoose.Schema;

const personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

const Person = mongoose.model('Person', personSchema);

// not a "real" function ctor, so not using "new"
let john = Person({
	firstname: 'john',
	lastname: 'mctim',
	address: 'larrytown'
});

john.save(function(err) {
	if (err) {
		throw err;
	}

	console.log('saved');
});

// route all asset requests to public folder
const publicpath = __dirname + '/public';
app.use('/assets', express.static(publicpath));

// template engine
app.set('view engine', 'ejs');

// custom middleware
app.use('/', function(req, res, next) {
	console.log('req url:', req.url);

	Person.find({}, function(err, users) {
		if (err) {
			throw err;
		}

		console.log(users);
	});

	next();
});

apiController(app);
htmlController(app);

app.listen(port);