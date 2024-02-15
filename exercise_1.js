// the getGreeting function.

const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

function getGreeting(name, surname) {
    return `Hi, ${name} ${surname}. What's up?`;
}