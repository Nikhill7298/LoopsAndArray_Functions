let i=0;

while(i<5){
   
    console.log(i)
    i++;
    

}

let count = 0;
for (i= 1; i < 5; i++) {
    
    count += i;
}
console.log(count);


let j = 0;

while (j<NaN){

    j++;
// }
console.log(j);



let i = 3 , count = 0;

do {
    count ++;
}while (--i > 0);
console.log(count, i);   //3-1
                          // 2-2
                          //1-3
                          //0-4  then later i will decrement to -1 and loop will break