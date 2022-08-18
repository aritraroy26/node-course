const fs = require("fs"); //import fs package to work with file system

const args = process.argv.slice(2);
const name = args[0];
fs.writeFile("hello.txt", `Hello ${name}!`, (err) => {
  //err -> the first argument is always an error argument
  console.log("Done.");
});
