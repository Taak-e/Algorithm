const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val)
const [a, b] = input

if (a>b) {
    console.log('>')
} else if (a<b) {
    console.log('<')
} else if (a == b) {
    console.log('==')
}