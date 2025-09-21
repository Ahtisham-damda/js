let percent = 89.6;
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

console.log("Percent = " + percent);
console.log("Grade = " + grade);

let result = " ";

switch (grade) {
  case "A":
    result = "You Scored Distinction!";
    break;
  case "B":
    result = "You Scored First Class!";
    break;
  case "C":
    result = "You Scored Second Class!";
    break;
  case "D":
    result = "You Failed!";
    break;

  default:
    result = "Invalid Grade!";
    break;
}
console.log("Result : " + result);
