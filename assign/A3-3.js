//Print the result in the following format:

//Consumer Name: John Doe  
//Consumer No: 101  
//Units Consumed: 350  
//Bill Amount: 825 Rs


// Hardcoded values
let name = "John Doe";
let cons_no = 101;
let units = 350;

let remainingUnits = units;
let bill = 0;

// Calculate bill based on slab rates
if (remainingUnits > 400) {
    bill += (remainingUnits - 400) * 4.0;
    remainingUnits = 400;
}

if (remainingUnits > 200) {
    bill += (remainingUnits - 200) * 3.5;
    remainingUnits = 200;
}

if (remainingUnits > 100) {
    bill += (remainingUnits - 100) * 2.5;
    remainingUnits = 100;
}

bill += remainingUnits * 1.5; // first 100 units

// Print in the requested format
console.log("Consumer Name:", name);
console.log("Consumer No:", cons_no);
console.log("Units Consumed:", units);
console.log("Bill Amount:", bill.toFixed(0), "Rs"); // rounded to nearest Rs
