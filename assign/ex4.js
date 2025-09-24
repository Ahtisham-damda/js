function printFact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log();
  console.log("Factorial of " + n + " = " + fact);
}

printFact(8);
