const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

let people = [
	{
		name: 'larry'
	},
	{
		name: 'tim'
	},
	{
		name: 'bob'
	}
];

app.get('/', function(req, res) {
	res.render('index', {serverPeople: people});
});

app.listen(port);
