let numbers = [2, 10, 37, 98];
let double = [];
let n;

let len = numbers.length;
for (let i = 0; i < len; i++) {
  n = numbers[i];
  double.push(n * 2);
}
console.log(double);
