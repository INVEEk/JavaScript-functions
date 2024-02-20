/*
Create the getCalculationResult function. It should accept three arguments:

the first number
the second number
the calculation type

the calculation type should be a string that is either '+', '-', '*', or '/'

the function should return the result of the calculation based on the numbers and the type of the calculation

if the calculation type is not recognized, return null
 */

function getCalculationResult(firstNumber, secondNumber, calculationType) {
    if (calculationType === "+") {
        return firstNumber + secondNumber;
    }
    if (calculationType === "-") {
        return firstNumber - secondNumber;
    }
    if (calculationType === "*") {
        return firstNumber * secondNumber;
    }
    if (calculationType === "/" && secondNumber !== 0) {
        return firstNumber / secondNumber;
    }
    if (secondNumber === 0) {
        return "Do not divide by zero, my darling"
    }
    return null;
}

console.log(getCalculationResult(1, 2, "+"));
console.log(getCalculationResult(8, 5, "-"));
console.log(getCalculationResult(5, 7, "*"));
console.log(getCalculationResult(3, 8, "/"));
console.log(getCalculationResult(20, 0, "/"));
console.log(getCalculationResult(20, 5, "["));