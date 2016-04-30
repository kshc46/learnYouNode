var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var str = contents.toString();
var para = str.split("\n");

console.log(para.length-1);