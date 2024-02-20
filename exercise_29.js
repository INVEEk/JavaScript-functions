/*
Implement the getFahrenheitConvertedToCelcius function

it should accept one argument:

a number

the function should return the number converted from Fahrenheit to Celcius
 */


const FAHRENHEIT_TO_CELCIUS_INDICATOR = 5 / 9;
const FIXED_VALUE = 32;
function getFahrenheitConvertedToCelcius (number) {
    return (number - FIXED_VALUE) * FAHRENHEIT_TO_CELCIUS_INDICATOR ;
}

console.log(getFahrenheitConvertedToCelcius(100));
console.log(getFahrenheitConvertedToCelcius(1300));
