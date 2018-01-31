const Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setupTodos', function(req, res) {
		const startTodos = [
			{
				username: 'tim',
				todo: 'jump up and down',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'tim',
				todo: 'shout Larry',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'tim',
				todo: 'talk about bricks',
				isDone: false,
				hasAttachment: false
			}
		];

		Todos.create(startTodos, function(err, results) {
			res.send(results);
		});
	});
};