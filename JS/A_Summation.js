const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const numbers = input.slice(1);
const summation = numbers.reduce((sum, number) => sum + number, 0);
console.log(Math.abs(summation));