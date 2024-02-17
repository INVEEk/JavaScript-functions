/*
Implement the isDivisible function

it should accept two arguments:

the number to be divided

the number to divide by

the function should return true  if the dividend is divisible by the divisor, and false  otherwise
 */

function isDivisible (dividedNumber, divider) {
    return dividedNumber % divider === 0;
}


console.log(isDivisible(10,5));
console.log(isDivisible(9, 4));