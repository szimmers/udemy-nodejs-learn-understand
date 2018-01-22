// pattern 1 - replace exports w/ a function
var greet = require('./greet1');
greet();

// pattern 2 - add function to exports
var greet2 = require('./greet2').greet;
greet2();

// pattern 3 - replace exports w/ my own object
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'change-ed';

// require caches fetched modules, so we will see the changed greeting from above
var greet3b = require('./greet3');
greet3b.greet();

// pattern 4 - replace exports w/ ability to create my own object
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = 'change-ed again';

var Greet4b = require('./greet4');
var grtr4b = new Greet4b();
grtr4b.greet();

// pattern 5 - replace exports w/ object that exposes what i want ("revealing module pattern")
var greet5 = require('./greet5');
greet5.greet();

var greet5b = require('./greet5').greet;
greet5b();
