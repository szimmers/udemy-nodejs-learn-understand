var a = 'bleep';

// IIFE (immediately invoked function expression) - note that the outside parens define it as an expression
(function() {
	var a = 'bleh';
	console.log(a);
}());

// and of course the a inside the IIFE is scoped to that function
console.log(a);
