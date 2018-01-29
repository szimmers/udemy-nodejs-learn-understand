const express = require('express');

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
	next();
});

apiController(app);
htmlController(app);

app.listen(port);