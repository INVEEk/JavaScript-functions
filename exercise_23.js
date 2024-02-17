/*
. Implement the isOddNumber function

it should accept one argument:

a number

the function should return true  if the number is odd, and false  if the number is not odd
 */

function isOddNumber(number) {
    return number % 2 === 0;
}

console.log(isOddNumber(2));
console.log(isOddNumber(3));