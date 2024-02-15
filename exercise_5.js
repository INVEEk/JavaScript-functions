/*
Implement the getCirclesAreaSum function that uses the getCircleArea function under the hood

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

*/

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

function getCirclesAreaSum (radius1, radius2) {
    return ((Math.PI*radius1**2) + (Math.PI*radius2**2));
}