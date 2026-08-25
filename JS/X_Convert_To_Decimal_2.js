const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const test = input[0];
for (let i = 1; i <= test; i++) {
    let num = input[i];
    let cnt1 = 0;
    while (num) {
        cnt1 += num % 2;
        num = Math.floor(num / 2);
    }
    let ans = 0;
    for (let i = 0; i < cnt1; i++) {
        ans += 1 * Math.pow(2, i);
    }
    console.log(ans);
}