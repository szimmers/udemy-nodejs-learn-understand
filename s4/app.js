var person = {
	firstName: 'Larry',
	lastName: 'McBob',
	greet: function() {
		var msg = 'hi ' + this.firstName + ' ' + this.lastName;
		//var msg = `hi ${this.firstName} ${this.lastName}`;
		console.log(msg);
	}
};

person.greet();
person['greet']();
