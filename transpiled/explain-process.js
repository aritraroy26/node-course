"use strict";

console.log(process.argv);
/* command -> node ./explain-process.js 10 "abc" */

/* output -> 
[
  'C:\\Program Files\\nodejs\\node.exe', -> path to node
  'D:\\POCApps\\angular-zero-to-full-stack\\node-course\\explain-process.js', -> path to file to be run
  '10', -> arg 1
  'abc' -> arg 2
]
*/

console.log(process.argv.slice(2)); // slice is used to slice the required arguments from the cmd line (argv) leaving out the first two arguments
//cmd -> node .\explain-process.js 140 "abc"
//output -> [ '140', 'abc' ]
//each argument is read as strings