const readlineSync = require("readline-sync");

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER

console.log();

let positive = Number(readlineSync.question("Positive integer: "));
let factorsString = "";
let i = positive;
let order;

while (positive < MIN || positive > MAX || Number.isNaN(positive) || !Number.isInteger(positive)) {
  positive = Number(readlineSync.question("Positive integer: "));
}

for (i; i >= Math.sqrt(positive); i--) {
  if (positive % i == 0) {
    order = positive / i;
    if (i == order){
      factorsString = factorsString + ", " + order;
    } else if (i == positive) {
      factorsString = factorsString + order + ", " + i;
    } else {
      factorsString += ", " + order + ", " + i;
    }
  }
}

factorsString += "."
console.log("\n" + factorsString + "\n");
