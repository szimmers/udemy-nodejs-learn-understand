var greet = require('./greet');
greet();

// after required, node will wrap up greet like this:
/*
(function(exports, require, module, __filename, __dirname) {
	// greet
});
 */
// ... then soon thereafter, invokes it with apply().
// then it returns module.exports, so any changes we make inside our module to
// module.exports, is preserved and made available to whoever requires that module.
