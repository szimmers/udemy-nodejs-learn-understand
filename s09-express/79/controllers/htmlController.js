/*
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
*/

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	// e.g. http://localhost:3000/person/77x?foo=bar
	app.get('/person/:id', function(req, res) {
		res.render('person', {ID: req.params.id, foo: req.query.foo});
	});
};