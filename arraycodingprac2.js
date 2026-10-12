let arr = [1, 2, 3, 4, 5];
let max = arr[0];
for (i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];

    }
}
console.log(max);

let score= [90, 80, 70, 60, 50];

let grades = score.map(s => s>50 ? 'pass': 'fail');

console.log(grades);

let passing = grades.filter(s => s>50);

console.log(passing);