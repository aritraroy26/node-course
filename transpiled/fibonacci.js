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
}

var howMany = Number(process.argv.slice(2)[0]);
console.log(generateFibonacci(howMany));