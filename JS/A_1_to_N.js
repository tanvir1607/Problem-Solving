const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8"));

for (let i = 1; i <= N; i++) {
    console.log(i);
}