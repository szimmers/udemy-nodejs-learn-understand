const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));

mongoose.connect(config.getDBConnectionString());

setupController(app);
apiController(app);

app.listen(port);
