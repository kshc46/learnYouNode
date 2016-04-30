var count = 2;
var total = 0;

while (count < process.argv.length) {
    total += Number(process.argv[count]);
    count++;
}

console.log(total)