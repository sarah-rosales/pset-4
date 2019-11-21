const readlineSync = require("readline-sync");

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER

let integer = Number(readlineSync.question("\nPositive integer: "));
let reverse = 0
let reverseString = "";

while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}

while (integer > 0) {
  reverse = integer % 10;
  integer = (integer-integer % 10) / 10;

  if (integer == 0) {
    reverseString = reverseString + reverse + ".";
  } else if  (!integer == 0) {
    reverseString = reverseString + reverse + ", ";
  }

}

console.log("\n" + reverseString);
