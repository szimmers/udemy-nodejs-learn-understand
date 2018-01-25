const fs = require('fs');
const zlib = require('zlib');

let readpath = __dirname + '/text.txt';
let readable = fs.createReadStream(readpath);

// this is a transform stream (rw)
let gzip = zlib.createGzip();

let compresspath = __dirname + '/out.txt.gz';
let compressed = fs.createWriteStream(compresspath);

// create a commpressed version of the file
readable.pipe(gzip).pipe(compressed);
