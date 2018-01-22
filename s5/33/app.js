var Emitter = require('./emitter');
// this works too, interface is the same
//var Emitter = require('events');

var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
	console.log('greeted fired (a)');
});

emitter.on(eventConfig.GREET, function() {
	console.log('greeted fired (b)');
});

emitter.emit(eventConfig.GREET);
