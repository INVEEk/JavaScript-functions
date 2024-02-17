/*
Implement the getFahrenheitConvertedToCelcius function

it should accept one argument:

a number

the function should return the number converted from Fahrenheit to Celcius
 */


const celciusDegree = 33.8
function getFahrenheitConvertedToCelcius (number) {
    return number / celciusDegree;
}

console.log(getFahrenheitConvertedToCelcius(100));
console.log(getFahrenheitConvertedToCelcius(1300));
