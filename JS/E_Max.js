const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const size = Number(input[0]);
const arr = input.slice(1, size + 1).map(Number);

let mx = -Infinity;
for (const x of arr) mx = Math.max(x, mx);
console.log(mx);