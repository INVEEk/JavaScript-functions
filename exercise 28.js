/*
. Implement the getCelciusConvertedToFahrenheit function

it should accept one argument:

a number

the function should return the number converted from Celcius to Fahrenheit
 */

const CELCIUS_TO_FAHRENHEIT_INDICATOR = 1.8
function getCelciusConvertedToFahrenheit (number) {
    return (number * CELCIUS_TO_FAHRENHEIT_INDICATOR) + 32;
}

console.log(getCelciusConvertedToFahrenheit(10));
console.log(getCelciusConvertedToFahrenheit(13));
