arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.push(6, 7);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

arr.reverse();
console.log(arr);

arr.splice(2, 4);
console.log(arr);   


arr.splice(2, 0, 2.5);
console.log(arr);

arr.splice(2, 3, 8,9);
console.log(arr);
