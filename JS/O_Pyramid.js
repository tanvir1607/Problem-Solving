const fs = require("fs");
const n = fs.readFileSync(0, "utf8")

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}