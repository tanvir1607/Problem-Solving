// Solution - 01
const fs = require("fs");
const n = fs.readFileSync(0, "utf8");

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}





// Solution - 02
const fs = require("fs");
const n = fs.readFileSync(0, "utf8");

for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
}