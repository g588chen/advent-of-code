var fs = require('fs');
var opcodes = new Array

fs.readFileSync('input.txt').toString().split(',').forEach(function (line) { opcodes.push(line); })
var noun = 0
var verb = 0
for (i = 0; i < opcodes.length; i++) {
    opcodes[i] = parseInt(opcodes[i],10)
}
var base = opcodes

var i
var j
for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
        opcodes = base
        opcodes[1] = i
        opcodes[2] = j
        output = findOutput(opcodes)
        if (output == 19690720) {
            console.log(100*i+j)
            break
        }
    }
    if (output == 19690720) {
        break
    }
}

function findOutput(opcodes) {
    var k
    for (k = 0; k < opcodes.length;) {
        var pos1 = opcodes[k+1]
        var pos2 = opcodes[k+2]
        var pos3 = opcodes[k+3]
        if (opcodes[k] == 99) {
            break
        }
        else if (opcodes[k] == 1) {
            opcodes[pos3] = opcodes[pos1] + opcodes[pos2]
        }
        else if (opcodes[k] == 2) {
            opcodes[pos3] = opcodes[pos1] * opcodes[pos2]
        }
        k = k + 4
    }
    return opcodes[0]
}