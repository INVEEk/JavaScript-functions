/* Implement the isThisBoolean  function that returns true  if provided with a boolean.

isThisBoolean(true);  //true
isThisBoolean(false);  // true
isThisBoolean('true'); // false

 */

function isThisBoolean(argument) {
    return typeof argument === 'boolean';
}

console.log(isThisBoolean(10 === 10));
console.log(isThisBoolean(false));
console.log(isThisBoolean(`true`));

