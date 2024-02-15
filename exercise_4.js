/*
4. Implement the getCircleArea  function

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483
*/

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

function getCircleArea (area) {
    return Math.PI * radius**2;
}

