const fs = require("fs");
const [a, b] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let gcd = 1;
for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
}
console.log(gcd);