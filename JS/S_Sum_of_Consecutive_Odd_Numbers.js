const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

let test = Number(lines[0]);
for (let i = 1; i <= test; i++) {
    let [a, b] = lines[i].split(" ").map(Number);
    if (a > b) [a, b] = [b, a];
    
    let sum = 0;
    for (let i = a + 1; i < b; i++) {
        sum += i % 2 ? i : 0;
    }
    console.log(sum);
}