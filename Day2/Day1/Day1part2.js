var fs = require('fs');
var masses = new Array
var fuel = 0
fs.readFileSync('input.txt').toString().split('\n').forEach(function (line) { masses.push(line); })
for (x of masses) {
    fuel += calcFuel(x)
}
console.log(fuel)

function calcFuel(mass) {
    var total = 0
    while(Math.floor(mass/3) - 2 > 0) {
        mass = Math.floor(mass/3) - 2
        total += mass
    }
    return total

}