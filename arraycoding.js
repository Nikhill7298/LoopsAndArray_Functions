// let arr = [1, 2, 3, 4, 5];
// max = arr[1];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

const data = require('fs').readFileSync(0, 'utf8');

const tokens = data.split(/\s+/)
    .filter(s => s.length > 0)
    .map(Number);
tokens = [5,3,7,2,9,1]
const n = tokens[0];
const arr = tokens.slice(0, 1 + n);
console.log(arr);