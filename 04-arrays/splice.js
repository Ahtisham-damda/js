let sub1 = ["Java", "C++", "Python"];
let sub2 = ["Javascript", "HTML", "CSS"];
let CombineSub = sub1.concat(sub2);
console.log(CombineSub);

sub1.splice(0, 0, "Ruby");
console.log(sub1);

sub2.splice(2, 1, "Bootstrap", "TailwindCSS");
console.log(sub2);
