/*
 Implement the getPercentageValue function

it should accept two arguments:

the base number

the percentage

the function should return the percentage value based on the base number and the percentage
 */

function getPercentageValue(baseNumber, percentage) {
    if (baseNumber > 0 ) {
        return ((percentage / baseNumber) * 100 + " percent");
    }
    return "Please provide correct number";
}

console.log(getPercentageValue(20, 5));
console.log(getPercentageValue(100, 50));
console.log(getPercentageValue(10, 1));
console.log(getPercentageValue(150, 100));