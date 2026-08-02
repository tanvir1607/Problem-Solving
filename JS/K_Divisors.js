const fs = require("fs");
const num = Number(fs.readFileSync(0, "utf8"));

for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i);
}