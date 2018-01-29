'use strict';

const Greetr = require('./greetr');

let greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('someone greeted:', data);
});

greeter1.greet('larry');
