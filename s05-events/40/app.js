'use strict';

// use ES6 classes
class Person {
	constructor(firstName, lastName) {
		// these are added to each object created
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// this is added to the prototype
	greet() {
		let msg = 'hi ' + this.firstName + ' ' + this.lastName;
		console.log(msg);
	}
}

let tim = new Person('Tim', 'McBob');
console.log(tim);

tim.greet();

console.log(tim.__proto__);