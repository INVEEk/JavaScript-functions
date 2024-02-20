/*
 Implement the getPercentageValue function it should accept two arguments:

the base number

the percentage

the function should return the percentage value based on the base number and the percentage
 */

function getPercentageValue(baseNumber, percentage) {
    if (baseNumber > 0 ) {
        return baseNumber * (percentage/100);
    }
    return "Please provide correct number";
}

console.log(getPercentageValue(20, 5)); // 1
console.log(getPercentageValue(100, 50)); // 50
console.log(getPercentageValue(10, 1)); // 0,1
console.log(getPercentageValue(20, 10)); // 2