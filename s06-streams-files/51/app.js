const fs = require('fs');

let readpath = __dirname + '/text.txt';
let readable = fs.createReadStream(readpath, {
	encoding: 'utf8',
	highWaterMark: 2*1024

});

let writepath = __dirname + '/out.txt';
let writeable = fs.createWriteStream(writepath);

// just setting the listener will start the stream.
// will fire each time the buffer fills. default buffer size is 64k. can override w/ highWaterMark.
readable.on('data', function(chunk) {
	console.log(chunk.length);
	writeable.write(chunk);
});