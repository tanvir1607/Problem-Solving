const fs = require("fs");
const [k, s] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let ans = 0;
for (let x = 0; x <= k; x++) {
    for (let y = 0; y <= k; y++) {
        let z = s - x - y;
        if (z >= 0 && z <= k) ans++;
    }
}
console.log(ans);