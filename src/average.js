const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let non_negative = 0;
let sum = 0;
let values = 0;

console.log();

while (non_negative >= MIN && non_negative < MAX) {
    non_negative = readlineSync.question("Non-negative integer: ");

  if (non_negative >= MIN && non_negative < MAX) {
    sum = parseFloat(sum) + parseFloat(non_negative);
    values++;
  }
}

let average = sum / values
average = average.toLocaleString("en", {maximumFractionDigits: 3, minimumFractionDigits: 3});
console.log("\n" + average + ".\n");
