const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const size = Number(input[0]);
const arr = input.slice(1, size + 1).map(Number);

let even = 0, odd = 0, pos = 0, neg = 0;
for (let x of arr) {
    x % 2 ? odd++ : even++;
    x > 0 ? pos++ : x < 0 ? neg++ : neg;
}
console.log("Even:", even);
console.log("Odd:", odd);
console.log("Positive:", pos);
console.log("Negative:", neg);