function Greetr() {
	this.greeting = 'hi 4';

	this.greet = function() {
		console.log(this.greeting);
	}
}

// pattern 4 - replace exports w/ ability to create my own object
module.exports = Greetr;
