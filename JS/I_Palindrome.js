const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function reverseNum(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

const num = input[0];
console.log(reverseNum(num));
console.log(num === reverseNum(num) ? "YES" : "NO");