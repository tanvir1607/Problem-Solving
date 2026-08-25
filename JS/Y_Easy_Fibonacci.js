const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8"));

const fib = new Array(n).fill(0);
if (n >= 2) fib[1] = 1;
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(" "));