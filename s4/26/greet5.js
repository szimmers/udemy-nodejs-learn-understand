// pattern 5 - replace exports w/ object that exposes what i want ("revealing module pattern")
var greeting = 'hi 5';

function greet() {
	console.log(greeting);
}

module.exports = {
	greet: greet
};