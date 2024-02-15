/*
8. Write the getBillboardPrice function that accepts two arguments:

the text intended to use on the billboard

the cost of a single character

getBillboardPrice('Hello world!', 10); // 120
getBillboardPrice('Hello world!', 15); // 180
getBillboardPrice('To be, or not to be', 20); // 380

*/

console.log(getBillboardPrice('Hello world!', 10)); // 120
console.log(getBillboardPrice('Hello world!', 15)); // 180
console.log(getBillboardPrice('To be, or not to be', 20)); // 380


function getBillboardPrice(slogan, pricePerSingleLetter) {
    return `${slogan.length}` * pricePerSingleLetter;
}
