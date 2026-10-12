const data = require('fs').readFileSync(0, 'utf8');

const tokens = data.split(/\s+/)
    .filter(s => s.length > 0)
    .map(Number);

let n = tokens[0];




for (let i = 1; i < tokens.length; i++) {
    if (tokens[i] > n) {
        n = tokens[i];
    }
}

console.log(n);