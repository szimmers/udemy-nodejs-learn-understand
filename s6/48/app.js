// 8 bytes, raw binary data
let buffer = new ArrayBuffer(8);

// ES6 typed arrays: here, can store 2 32-byte ints
// w/ ES6, JS can now deal w/ binary data
let view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);
