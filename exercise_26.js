/*
Implement the getSmallerNumber function

it should accept two arguments:

    the first number

the second number

the function should return the smaller of two numbers

 */

function getSmallerNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return secondNumber;
    }
    return firstNumber;
}

console.log(getSmallerNumber(20, 10));
console.log(getSmallerNumber(20, 30));

