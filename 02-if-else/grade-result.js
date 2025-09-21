let percent = 85.54;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Percentage : " + percent);
console.log("Grade : " + grade);

let result = "";
if (grade == "A") {
  result = "You Scored Distinction!";
} else if (grade == "B") {
  result = "You Secured First Class!";
} else if (grade == "C") {
  result = "You Passed!";
} else if (grade == "D") {
  result = "You Failed!";
} else {
  result = "Invalid Grade!";
}
console.log("Result: " + result);
