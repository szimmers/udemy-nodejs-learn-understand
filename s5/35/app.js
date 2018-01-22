// using an object literal as a prototype base, instead of a function ctor
var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

// creates empty object whose prototype is person
var bob = Object.create(person);
bob.firstname = 'bob';
bob.lastname = 'mclarry';

var tim = Object.create(person);
tim.firstname = 'tim';
tim.lastname = 'mcdoug';

console.log(bob.greet());
console.log(tim.greet());
