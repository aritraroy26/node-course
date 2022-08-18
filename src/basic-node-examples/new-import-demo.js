//default import
// import generateFibonacci from "./generate-fibonacci-new.js"; //.js is mandatory

//named import
import { generateFibonacci } from "./new-export-demo.js";

//namespace import
import * as stuff from "./new-export-demo.js";

stuff.sayHello();
stuff.generateFibonacci(5);
console.log(generateFibonacci(10));
