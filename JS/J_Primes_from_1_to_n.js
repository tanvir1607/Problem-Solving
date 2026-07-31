const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const num = input[0];
let primes = [];
for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primes.push(i);
}
console.log(primes.join(" "));