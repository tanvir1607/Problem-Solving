const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const n = Number(input[0]);

for (let i = 1; i <= 12; i++) console.log(n, "*", i, "=", n * i);