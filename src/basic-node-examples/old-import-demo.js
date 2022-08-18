//old way of importing modules
//imports default export
const generateFibonacci = require("./generate-fibonacci.js");

//import named exports
const { generateFib } = require("./generate-fibonacci.js"); //imported using object destructuring

const fib = require("./generate-fibonacci.js");

console.log(generateFibonacci(10));
console.log(generateFib(15));
console.log(fib.generateFib(20));
//console.log(fib.generateFibonacci(25)); -> throws error: TypeError: fib.generateFibonacci is not a function
