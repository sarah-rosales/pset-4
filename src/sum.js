const readlineSync = require("readline-sync");

let lower_bound = Number(readlineSync.question("\nLower Bound: "));
let upper_bound = Number(readlineSync.question("Upper Bound: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
