let GroceryList = ["Rice", "Sugar", "Salt", "Wheat", "Pulses"];
let totalItems = GroceryList.length;
console.log("Total items in the List : " + totalItems);

let SearchGrocery = "Milk";
let isAvailable = GroceryList.includes(SearchGrocery);
console.log("Is " + SearchGrocery + "Available ? " + isAvailable);

let addGrocery = "Milk";
GroceryList.unshift(addGrocery);
console.log("Updated Grocery List : " + GroceryList);

 SearchGrocery = "Milk";
 isAvailable = GroceryList.includes(SearchGrocery);
console.log("Is " + SearchGrocery + "Available ? " + isAvailable);
