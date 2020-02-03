var fs = require('fs');
var opcodes = new Array

fs.readFileSync('input.txt').toString().split(',').forEach(function (line) { opcodes.push(line); })
opcodes[1] = 12
opcodes[2] = 2
var i
for (i = 0; i < opcodes.length; i++) {
    opcodes[i] = parseInt(opcodes[i],10)
}
for (i = 0; i < opcodes.length;) {
    console.log(opcodes[0])
    var pos1 = opcodes[i+1]
    var pos2 = opcodes[i+2]
    var pos3 = opcodes[i+3]
    if (opcodes[i] == 99) {
        break
    }
    else if (opcodes[i] == 1) {
        opcodes[pos3] = opcodes[pos1] + opcodes[pos2]
    }
    else if (opcodes[i] == 2) {
        opcodes[pos3] = opcodes[pos1] * opcodes[pos2]
    }
    i = i + 4
}
console.log(opcodes[0])
