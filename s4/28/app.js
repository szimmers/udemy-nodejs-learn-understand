// no path, so it's a core/native module
var util = require('util');

var name = 'bob';
var greeting = util.format('yo, %s', name);
util.log(greeting);