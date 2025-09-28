let tools = ["Hammer", "Wrench", "Screwdriver"];
console.log("Before Shifting values : " + tools);
let firstTool = tools.shift();
console.log("Hammer is removed : " + firstTool);

console.log("After Shifting values : " + tools);

let newtool = tools.unshift(" Pliers ");
console.log("After Unshifting values : " + tools);