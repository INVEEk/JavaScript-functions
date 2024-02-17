/*
Implement the isNumberNegative function it should accept one argument:

    a number

the function should return true  if the number is negative, and false  if the number is not negative
 */

function isNumberNegative (number) {
    return number < 0 ? true : false;
}

console.log(isNumberNegative(-5));
console.log(isNumberNegative(0));
console.log(isNumberNegative(12));
