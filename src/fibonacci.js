const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let a = 1, b = 0, n;

console.log();

let positive = Number(readlineSync.question("Positive integer: "));

while (positive < MIN || positive > MAX || Number.isNaN(positive) || !Number.isInteger(positive)) {
  positive = Number(readlineSync.question("Positive integer: "));
} while (positive >= MIN) {
    n = a;
    a = a + b;
    b = n;
    positive--;
}

b = b.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\n" + b + ".\n");
