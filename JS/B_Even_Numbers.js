const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8"));

if (N === 1) {
    console.log(-1);
} else {
    for (let i = 2; i <= N; i += 2) {
        console.log(i);
    }
}