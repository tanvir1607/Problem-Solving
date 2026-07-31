const fs = require("fs");
const arr = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const pass = 1999;
for (let x of arr) {
    if (pass === x) {
        console.log("Correct");
        break;
    }
    else console.log("Wrong");
}