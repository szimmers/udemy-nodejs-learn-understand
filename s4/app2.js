function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// "new" on such an object creates the empty "this" that the function ctor can use.
// further, it will get the prototype from Person.
var tim = new Person('Tim', 'McBob');
console.log(tim);

// this is not a prototype on Person, but a prototype for any objects created from Person
Person.prototype.greet = function() {
	var msg = 'hi ' + this.firstName + ' ' + this.lastName;
	console.log(msg);
};

tim.greet();

console.log(tim.__proto__);