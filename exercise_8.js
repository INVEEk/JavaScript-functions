/*
6. Write the isTextUppercase  function.

isTextUppercase('Hello'); // false
isTextUppercase('HELLO'); // true
 */


console.log(isTextUppercase('Hello')); // false
console.log(isTextUppercase('HELLO')); // true


function isTextUppercase (string) {
    if (string === string.toUpperCase()) {
        return true;
    }
    return false;
}