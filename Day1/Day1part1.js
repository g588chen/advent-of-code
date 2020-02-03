var fs = require('fs');
var masses = new Array
var fuel = 0
fs.readFileSync('input.txt').toString().split('\n').forEach(function (line) { masses.push(line); })
for (x of masses) {
    fuel += Math.floor(x/3) - 2
}
console.log(fuel)
