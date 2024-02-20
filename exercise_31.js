/*
Implement the getAverageOfThreeNumbers  function
it should accept three arguments:

    the first number

the second number

the third number

the function should return the average of all provided numbers

 */

function getAverageOfThreeNumbers (firstNumber, secondNumber, thirdNumber) {
    return (firstNumber + secondNumber +thirdNumber) / 3;
}

console.log(getAverageOfThreeNumbers(10, 11, 12));
console.log(getAverageOfThreeNumbers(12, 14, 16));
console.log(getAverageOfThreeNumbers(12, 14, 0));