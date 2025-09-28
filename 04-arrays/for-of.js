let number2 = [10,20,30,40,50];
let total = 0;
for(let i=0; i < number2.length; i++){
    //total += number2[i];
    total = total + number2[i];
}
    console.log("Total after adding   is: " + total);


//  for of loop
total = 0;
for(let n of number2){
    total += n;
}
console.log("Total using for of loop: " + total);
