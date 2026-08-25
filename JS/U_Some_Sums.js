const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const [n, a, b] = input;

function sumOfDigit(num) {
    let ans = 0;
    while (num) {
        ans += num % 10;
        num = Math.floor(num / 10);
    }
    return ans;
}

let sum = 0;
for (let i = 1; i <= n; i++) {
    let digitSum = sumOfDigit(i);
    if (a <= digitSum && digitSum <= b) sum += i;
}
console.log(sum);