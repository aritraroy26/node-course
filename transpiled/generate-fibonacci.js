"use strict";

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
} //old way of exporting as module


module.exports = generateFibonacci; //default export

module.exports.generateFib = generateFibonacci; //named export