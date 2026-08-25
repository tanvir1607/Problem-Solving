const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

for (let line of lines) {
    let [M, N] = line.split(/\s/).map(Number);
    if (M > N) [M, N] = [N, M];
    
    if (M <= 0 || N <= 0) break;

    let sum = 0;
    let ans = "";
    for (let i = M; i <= N; i++) {
        sum += i;
        ans += i + " ";
    }
    ans += `sum =${sum}`;
    console.log(ans);
}
