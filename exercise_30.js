/*
Implement the isLeapYear  function it should accept one argument:

a number

the function should return true  if the number represents a leap year, and false otherwise
 */

function isLeapYear(number) {
    return ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0);
}


console.log(isLeapYear(2012));
console.log(isLeapYear(2024));
console.log(isLeapYear(1998));
console.log(isLeapYear(2027));