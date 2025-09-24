function printreverse(n) {
  let reverse = 0,
    remainder = 0;
  let i = 1;
  while (n > 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
    i++;
  }
  console.log("Reverse = " + reverse);
}

printreverse(54321);


// function printReverse(n) {
//   let reverse = 0;
//   let remainder = 0;

//   let i = 1;
//   while (n > 0) {
//     remainder = n % 10; // Get last digit
//     reverse = reverse * 10 + remainder; // Append digit to reverse
//     n = Math.floor(n / 10); // Remove last digit
//     i++;
//   }

//   console.log("Reverse = " + reverse);
// }
// printReverse(54321);


