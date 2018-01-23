/*
c.f. https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_inherits_constructor_superconstructor

Note: Usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language
level inheritance support. Also note that the two styles are semantically incompatible.
*/

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'hi';
}

// any object created using the ctor for Greetr will also become an event emitter
util.inherits(Greetr, EventEmitter);

// can still add our own, afterwards
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ':', data);
	this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('someone greeted:', data);
});

greeter1.greet('larry');
