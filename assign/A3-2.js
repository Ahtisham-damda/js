//Write a JavaScript program that calculates the electricity bill based on the following slab rates:

let name = "John Doe";
let cons_no = 101;
let units = 350;

let bill = 0;

if (units > 400) {
    bill += (units - 400) * 4.0; // units above 400
    units = 400;
}

if (units > 200) {
    bill += (units - 200) * 3.5; // units 201–400
    units = 200;
}

if (units > 100) {
    bill += (units - 100) * 2.5; // units 101–200
    units = 100;
}

bill += units * 1.5; // first 100 units

console.log("Electricity Bill");
console.log("-----------------");
console.log("Name       :", name);
console.log("Consumer # :", cons_no);
console.log("Total Bill : Rs", bill.toFixed(2));
