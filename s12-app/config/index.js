const configValues = require('./config');

module.exports = {
	getDBConnectionString: function() {
		return `mongodb://${configValues.uname}:${configValues.pwd}@ds221258.mlab.com:21258/udemy-node-todo`;
	}
};