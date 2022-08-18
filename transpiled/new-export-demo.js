"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFibonacci = generateFibonacci;
exports.sayHello = sayHello;

//named export
function generateFibonacci(howMany) {
  var x = 1;
  var y = 1;
  var sequence = [x, y];
  Array(howMany).fill().forEach(function () {
    var sum = x + y;
    sequence.push(sum);
    x = y;
    y = sum;
  });
  return sequence;
}

function sayHello() {
  console.log("Hello world!");
} // export default generateFibonacci; //default export