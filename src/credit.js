const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

console.log();

let number = Number(readlineSync.question("Number: "));
let everyOther = 0
let sum = 0
let total = 0
let firstNumber = 0
let secondNumber = 0
let others = 0
let totalNumbers = 0

while (number < MIN || number > MAX || Number.isNaN(number) || !Number.isInteger(number)) {
  number = Number(readlineSync.question("Number: "));
}

everyOther = number

while (everyOther >= 1) {
  everyOther /= 10;
  total += 1;
}

firstNumber = Math.floor(number / 10 ** (total - 1));
secondNumber = (Math.floor(number / 10 ** (total - 2)) / 10) * 10;

for (let i = 0; i < total; i++) {
  others = (number - Math.floor(number / 10) * 10);
  number = Math.floor(number / 10);
  if (i % 2 == 1) {
    if (others * 2 >= 10) {
      sum += ((others * 2 - others * 2 % 10) / 10 + others * 2 % 10);
    } else if (others * 2 < 10) {
      sum += others * 2;
    }
  } else {
    sum += others;
  }
  totalNumbers += 1;
}

if (total== 16 && (secondNumber >= 51 && secondNumber <= 55)) {
  console.log("\nMastercard.")
} else if (total== 15 && (secondNumber == 34 || secondNumber == 37)) {
  console.log("\nAmex.")
} else if ((total == 16 || total == 13) && firstNumber == 4) {
    console.log("\nVisa.")
} else if (sum / 10 % 1 != 0) {
      console.log("\nInvalid.")
}
