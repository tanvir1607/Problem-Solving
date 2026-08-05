const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

const symbol = lines[0];
const arr = lines[2].split(" ").map(Number);

for (let x of arr) {
    console.log(symbol.repeat(x));
}