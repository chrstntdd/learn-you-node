let fs = require('fs');

let file = process.argv[2];
let buf = fs.readFileSync(file, 'utf8'); //Encoding argument negates the need for .toString().
let output = buf.split('\n').length - 1;

console.log(output);