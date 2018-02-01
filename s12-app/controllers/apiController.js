const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.get('/api/todos/:uname', function(req, res) {
		Todos.find({username: req.params.uname}, function(err, todos) {
			if (err) {
				throw err;
			}

			res.send(todos);
		});
	});

	app.get('/api/todo/:id', function(req, res) {
		Todos.findById({_id: req.params.id}, function(err, todo) {
			if (err) {
				throw err;
			}

			res.send(todo);
		});
	});

	app.post('/api/todo', function(req, res) {
		// exists? edit...
		if (req.body.id) {
			let updateTodo = {
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			};

			Todos.findByIdAndUpdate(req.body.id, updateTodo, function(err, todo) {
				if (err) {
					throw err;
				}

				res.send('Success');
			});
		}
		// no, new
		else {
			let newTodo = Todos({
				username: 'tim',
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			});

			newTodo.save(function(err) {
				if (err) {
					throw err;
				}

				res.send('Success');
			});
		}
	});

	app.delete('/api/todo', function(req, res) {
		Todos.findByIdAndRemove(req.body.id, function(err) {
			if (err) {
				throw err;
			}

			res.send('Success');
		});
	});

};