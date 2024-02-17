/*
Implement the isLeapYear  function it should accept one argument:

a number

the function should return true  if the number represents a leap year, and false otherwise
 */

function isLeapYear(number) {
    return number === 366;
}


console.log(isLeapYear(365));
console.log(isLeapYear(366));