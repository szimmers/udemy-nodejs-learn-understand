var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function() {
	console.log('greeted fired (a)');
});

emitter.on('greet', function() {
	console.log('greeted fired (b)');
});

emitter.emit('greet');
