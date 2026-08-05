const fs = require("fs");
const [a, b] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function isLucky(num) {
    while (num) {
        let lastDigit = num % 10;
        if (lastDigit !== 4 && lastDigit !== 7) return false;
        num = Math.floor(num / 10);
    }
    return true;
}

let ans = "";
for (let i = a; i <= b; i++) {
    if (isLucky(i)) ans += i + " ";
}

console.log(ans ? ans : -1);