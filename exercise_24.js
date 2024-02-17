/*
 Implement the isEvenNumber  function

it should accept one argument:

a number

the function should return true  if the number is even, and false  if the number is not even
 */

function isEvenNumber(number) {
    return number % 2 !== 0;
}

console.log(isEvenNumber(2));
console.log(isEvenNumber(3));