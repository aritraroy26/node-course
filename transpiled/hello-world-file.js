"use strict";

var fs = require("fs"); //import fs package to work with file system


var args = process.argv.slice(2);
var name = args[0];
fs.writeFile("hello.txt", "Hello ".concat(name, "!"), function (err) {
  //err -> the first argument is always an error argument
  console.log("Done.");
});