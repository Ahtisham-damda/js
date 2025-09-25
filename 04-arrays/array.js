let students = ["Ahtisham", "Ali", "Zamman"];
console.log("Before Changing " + students[1]);
students[1] = "Saqeef";
console.log("After Changing " + students[1]);
students.push("Hassan");
students.push("Bigdi Shafi");

console.log(students);

let removedStudent = students.pop();
console.log(students);

console.log(removedStudent);

let studentCount = students.length;
console.log("Total Students: " + studentCount);

let j;
console.log("****List Of Student****");
for(let i = 0;i < studentCount; i++){
    j = i + 1;
    console.log("Student #" + j + " -> " + students[i]);
    
}

