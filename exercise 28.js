/*
. Implement the getCelciusConvertedToFahrenheit function

it should accept one argument:

a number

the function should return the number converted from Celcius to Fahrenheit
 */

const farenheitDegree = 33.8
function getCelciusConvertedToFahrenheit (number) {
    return number * farenheitDegree;
}

console.log(getCelciusConvertedToFahrenheit(10));
console.log(getCelciusConvertedToFahrenheit(13));
