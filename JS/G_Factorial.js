const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function factorial(num) {
    let ans = 1;
    for (let i = 1; i <= num; i++) ans *= i;
    return ans;
}

let idx = 0;
let test = input[idx++];
while (test--) {
    let n = input[idx++];
    console.log(factorial(n));
}