// basic functions
var add = function(x, y) {
    var z = x + y;
    return z;
}
var sum = add(5,7);
console.log(sum);

// scope
var constant = 32;
function celsiusToFarenheit(temp) {
    var multiplier = 9;
    var divisor = 5;
    var farenheitTemp = temp * multiplier / divisor + constant;
    return farenheitTemp;
}
console.log(celsiusToFarenheit(100));
// console.log(multiplier); 

// nested functions
function hypotenuse() {
    var side1 = 3;
    var side2 = 4
    function squareSide1() {
        // has access to parent function
        return side1 * side1;
    }
    function squareSide2() {
        return side2 * side2;
    }
    return Math.sqrt(squareSide1() + squareSide2()); 
}
console.log(hypotenuse());

function hypotenuse2(a, b){
    function square(x) {
        // has access to parent function
        return x * x;
    }
    return Math.sqrt(square(a) + square(b)); 
}
console.log(hypotenuse2(3,4));

// closure
var scope = "global";
function testScope() {
    var scope = "local";
    function innerFunction() {
        return scope;
    }
    return innerFunction;
}
var innerFunction = testScope();
var answer = innerFunction();
console.log(answer);

// recursion
// this is the hard way
function f1(num, exp) {
    if(exp === 0) {
        return 1;
    }
    return num * f2(num, exp - 1);
}
function f2(num, exp) {
    if(exp === 0) {
        return 1;
    }
    return num * f3(num, exp - 1);
}
function f3(num, exp)
{
    if(exp === 0) {
        return 1;
    }
    return num * f4(num, exp - 1);
}
function f4(num, exp) {
    if(exp === 0) {
        return 1;
    }
    console.log("exponent too big");
}
var answer = f1(4, 3);
console.log(answer);

// using recursion
function fun1(num, exp){
    if(exp === 0) {
        return 1;
    }
    return num * f1(num, exp - 1);
}
var answer = f1(4, 3);
console.log(answer);

// using iteration
function iteratingFun1(num, exp){
    var retVal = 1;
    for (var i = 0; i < exp; i++) {
        retVal *= num;
    }
    return retVal;
}
var answer = iteratingFun1(5, 5);
console.log(answer);