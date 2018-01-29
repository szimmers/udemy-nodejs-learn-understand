'use strict';

const EventEmitter = require('events');

// ES6 classes, can extend instead of having to use util.inherit()
module.exports = class Greetr extends EventEmitter {
	constructor() {
		super();
		this.greeting = 'hi';
	}

	greet(data) {
		let msg = `${this.greeting}: ${data}`;
		console.log(msg);
		this.emit('greet', data);
	}
};