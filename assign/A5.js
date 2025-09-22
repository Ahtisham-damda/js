let total = 2000;
let couponCode = "DISC10";
let discount = 0;

switch (couponCode) {
  case "DISC5":
    discount = 5;
    break;
  case "DISC10":
    discount = 10;
    break;
  case "DISC20":
    discount = 20;
    break;
  default:
    discount = 0;
    break;
}
let finalBill = total - (total * discount) / 100;

console.log("Original Bill: " + total);
console.log("Coupon Applied: " + couponCode);
console.log("Final Bill after Discount: " + finalBill);
