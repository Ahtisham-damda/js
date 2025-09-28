let sports = ["Football", "Cricket", "Tennis", "Swimming", "Baseball"];
let firstSport = sports[0];
let lastSport = sports[sports.length - 1];
console.log("Sport List : " + sports);

console.log("First Sport : " + firstSport);
console.log("Last Sport : " + lastSport);

sports.push("Kabaddi");
console.log("Updated Sport List : " + sports);

let removedSport = sports.shift();
console.log("Removed Sport : " + removedSport);
console.log("Sport List After Removal : " + sports);
