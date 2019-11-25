const readlineSync = require("readline-sync");

const MIN = 1
const MAX = 24

console.log();

let height = Number(readlineSync.question("Height: "));
let row = height
let pyramid;
let reverse;

while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height)) {
  height = Number(readlineSync.question("Height: "));
}

console.log();

while (row > 0) {
  pyramid = "";
  reverse = "";
  for (let i = 0; i <= height; i++) {
      pyramid += "#";
  } for (i = 0; i < row - 1; i++) {
      pyramid = pyramid.replace(pyramid.charAt(i), " ");
  } for (i = row - 2; i < height; i++) {
      reverse = reverse + "#";
  }
    console.log(pyramid + "  " + reverse);
    row -= 1
  }
console.log();
