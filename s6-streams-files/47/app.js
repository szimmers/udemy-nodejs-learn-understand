var buf = new Buffer('howdy', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('ge');
console.log(buf.toString());
