// working with basic true/false
var isMale = true;
var isOld = true;
var isOldMan = isMale && isOld;
console.log(isOldMan);
var isFemale = false;
isOldMan = isFemale && isOld;
console.log(isOldMan);
var isOldorMan = isFemale || isOld;
console.log(isOldorMan);
var isMale = ! isFemale;
console.log(isMale);

// == vs ===
console.log(0 == false);
console.log(0 === false);

// ternary operators
var x = 5;
var y = x < 10 ? x : 10;
console.log(y);

