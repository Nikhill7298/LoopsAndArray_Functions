arr = [1,2,3,4,5];

result = arr.map(s => s>2 )

console.log(result);


result = arr.filter(s => s<5);

console.log(result);


result = arr.reduce((sum , n) => sum + n , 0);

console.log(result);


