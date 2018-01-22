function Greetr() {
	this.greeting = 'hi 3';

	this.greet = function() {
		console.log(this.greeting);
	}
}

// pattern 3 - replace exports w/ my own object
module.exports = new Greetr();
