// Solution - 01
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let numbers = lines.slice(1);
for (let number of numbers) {
    let ans = [];
    if (number === 0) ans.push(0);
    while (number) {
        ans.push(number % 10);
        number = Math.floor(number / 10);
    }
    console.log(ans.join(" "));
}





// Solution - 02
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const test = Number(lines[0]);
for (let i = 1; i <= test; i++) {
    const line = lines[i];
    console.log(line.split("").reverse().join(" "));
}