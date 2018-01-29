let obj = {
	name: 'larry',
	greet: function() {
		let msg = `hi ${this.name}`;
		console.log(msg);
	}
};

obj.greet();

// for both call() and apply(), pass an object to replace "this"
// ... but params are specified differently
obj.greet.call({name: 'tim'}, 'a', 'b');
obj.greet.apply({name: 'bob'});

// hm this didn't work for some reason
//obj.greet.apply({name: 'bob'} ['a', 'b']);
