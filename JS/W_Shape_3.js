const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8"));

for (let row = 1; row <= n; row++) {
    let line = "";
    for (let i = 1; i <= n - row; i++) line += " ";
    for (let i = 1; i <= 2 * row - 1; i++) line += "*";
    console.log(line);
}
for (let row = n; row >= 1; row--) {
    let line = "";
    for (let i = 1; i <= n - row; i++) line += " ";
    for (let i = 1; i <= 2 * row - 1; i++) line += "*";
    console.log(line);
}