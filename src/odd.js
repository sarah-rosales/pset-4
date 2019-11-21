const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = Number(readlineSync.question("\nPositive integer: "));
let odd = 0;
let sum = 0;

while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}

while (integer > 0) {
  odd = integer % 10;
  integer = Math.floor(integer / 10);

  if (odd % 2 !== 0) {
    sum = sum + odd;
  }
}

console.log("\n" + sum + ".\n");
