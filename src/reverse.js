const readlineSync = require("readline-sync");

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER

let integer = Number(readlineSync.question("\nPositive integer: "));
let reverse = 0
var b

while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}

while (integer > 0) {
  reverse *= 10
  reverse += integer % 10
  integer -= integer % 10
  integer /= 10

}

let str = reverse
console.log(str.length);
