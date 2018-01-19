var greet = require('./greet');
greet();

// after required, node will wrap up greet like this:
/*
(function(exports, require, module, __filename, __dirname) {
	// greet
});
 */
// ... then soon thereafter, invokes it with apply()
