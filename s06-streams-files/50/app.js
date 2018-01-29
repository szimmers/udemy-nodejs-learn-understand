// read file using buffers. note that multiple requests can eventually exhaust heap,
// since buffers sit on the heap.

const fs = require('fs');

let path = `${__dirname}/greet.txt`;

let greet = fs.readFileSync(path, 'utf8');
console.log(greet);

let greet2 = fs.readFile(path, function(err, data) {
	if (err) {
		console.log('error:', err);
	}
	else {
		// is a Buffer
		console.log('data:', data);
	}
});

let greet3 = fs.readFile(path, 'utf8', function(err, data) {
	if (err) {
		console.log('error:', err);
	}
	else {
		// is a string
		console.log('data:', data);
	}
});
