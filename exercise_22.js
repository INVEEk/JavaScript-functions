/*
Implement the getGreaterNumber function

it should accept two arguments:

    the first number

the second number

the function should return the greater of two numbers

 */

function getGreaterNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    }
    return secondNumber;
}

console.log(getGreaterNumber(20, 10));
console.log(getGreaterNumber(20, 30));