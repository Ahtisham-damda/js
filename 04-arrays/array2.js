//shift - removes the first element from an array and returns that element. This method changes the length of the array.

let tools = ["Hammer", "Wrench", "Screwdriver"];
console.log("Before Shifting values : " + tools);
let firstTool = tools.shift();
console.log("Hammer is removed : " + firstTool);

console.log("After Shifting values : " + tools);

//unshift - adds one or more elements to the beginning of an array and returns the new length of the array.
let newtool = tools.unshift(" Pliers ");
console.log("After Unshifting values : " + tools);

//indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = tools.indexOf("Screwdriver");
console.log("Position of Screwdriver = " + index);

//includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let searchtool = "bolt";
let found = tools.includes(searchtool);
console.log("Is " + searchtool + " available ? " + found);

//slice - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let subjects = [
  "Java",
  "C++",
  "Python",
  "Javascript",
  "HTML",
  "CSS",
  "React",
  "NodeJS",
  "SQL",
];
let newSubjects = subjects.slice(1, 7);
console.log(newSubjects);

//concat - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let sub1 = ["Java", "C++", "Python"];
let sub2 = ["Javascript", "HTML", "CSS"];
let CombineSub = sub1.concat(sub2);
console.log(CombineSub);


//splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: splice(startIndex, deleteCount, itemToInsert)

sub1.splice(0, 0 , "Ruby",);
console.log(sub1);

sub2.splice(2, 1, "Bootstrap", "TailwindCSS");
console.log(sub2);

//Calculate total using a for loop
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
