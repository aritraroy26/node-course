"use strict";

//old way of importing modules
//imports default export
var generateFibonacci = require("./generate-fibonacci.js"); //import named exports


var _require = require("./generate-fibonacci.js"),
    generateFib = _require.generateFib; //imported using object destructuring


var fib = require("./generate-fibonacci.js");

console.log(generateFibonacci(10));
console.log(generateFib(15));
console.log(fib.generateFib(20)); //console.log(fib.generateFibonacci(25)); -> throws error: TypeError: fib.generateFibonacci is not a function