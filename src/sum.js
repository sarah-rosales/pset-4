const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let lower_bound = 1
let upper_bound = 0
let sum = 0

console.log();

while (lower_bound > upper_bound || lower_bound < MIN || upper_bound > MAX) {
  lower_bound = Number(readlineSync.question("Lower bound: "));
  upper_bound = Number(readlineSync.question("Upper bound: "));
}

if (lower_bound % 2 !== 0) {
  lower_bound = lower_bound + 1
}

for (let i = lower_bound; i <= upper_bound; i = i + 2) {
  sum = i + sum;
}

sum = sum.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\n" + sum + ".");
