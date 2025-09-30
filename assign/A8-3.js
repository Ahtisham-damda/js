// function FindMax(a, b) {
//   let max;
//   if (a > b) {
//     max = a;
//   } else {
//     max = b;
//   }
//   return max;
// }

let FindMax = (a, b) => {
  let max = a > b ? a : b;
 return max;
};

let a = 30;
let b = 20;
console.log(FindMax(a, b));