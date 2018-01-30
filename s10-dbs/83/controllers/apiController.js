const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});
//const jsonParser = bodyParser.json();

module.exports = function(app) {
	app.get('/api/person/:id', function(req, res) {
		// get from db
		res.render('person', {ID: req.params.id});
	});

	app.post('/api/person', urlencodedParser, function(req, res) {
		// save to db
		console.log(req.body);
		res.send('danke');
	});

	app.delete('/api/person/:id', function(req, res) {
		// delete from db
	});
};