// function fact(n) {
//     let fact = 1;
//     for ( let i=1 ;i<=n ;i++){
//         fact = fact * i;
//     }
//     return fact;
// }

let ArrowFact = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

let n = 5;
let factorial = ArrowFact(n);
console.log(`Factorial of ${n} is : ${factorial}`);
