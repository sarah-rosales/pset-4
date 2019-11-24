const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

console.log();

let non_negative = Number(readlineSync.question("Non-negative integer: "));
let value = "Prime.";

while (non_negative < MIN || non_negative > MAX || Number.isNaN(non_negative) || !Number.isInteger(non_negative)) {
  non_negative = Number(readlineSync.question("Non-negative integer: "));
}

for (let i = 2; i < non_negative; i++) {
  if (non_negative % i == 0) {
    value = "Not prime.";
    break;
  } else {
    value = "Prime."
  }
}

console.log("\n" + value);
