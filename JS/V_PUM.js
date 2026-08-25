const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8"));

for (let row = 0; row < n; row++) {
    let start = row * 4 + 1;
    console.log(`${start} ${start + 1} ${start + 2} PUM`);
}
