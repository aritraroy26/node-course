import fs from "fs";
import path from "path";

/* read file sync */
// const data = fs.readFileSync(path.join(__dirname, "/example.txt"), "utf8");
// console.log(data);

/* write file sync */
// fs.writeFileSync(
//   path.join(__dirname, "/writeFile.txt"), //if file exists with same name, it deletes the existing file
//   "Hello World!",
//   "utf8"
// );

/* append file sync */
// fs.appendFileSync(
//   path.join(__dirname, "/writeFile.txt"),
//   "\nI am added here.",
//   "utf8"
// );

/* append json data */
// fs.appendFileSync(
//   path.join(__dirname, "/json-write-example.json"),
//   JSON.stringify({ message: "Hello world!" }),
//   "utf8"
// );

/* delete file sync */
// fs.unlinkSync(path.join(__dirname, "/writeFile.txt"));

/* make directory */
// fs.mkdirSync(path.join(__dirname, "my-directory"));

// fs.mkdirSync(path.join(__dirname, "parent-directory", "my-directory"));
// The above will throw error if the entire file path doesn't exist.
// In order to tell node to create dir incase it does not already exist, we use recursive:true. Example below.
// fs.mkdir(path.join(__dirname, "parent-directory", "my-directory"), {
//   recursive: true,
// });

/* make directory */
// fs.rmdirSync(path.join(__dirname, "my-directory"));

/* to check if file/dir exists */
// const exampleExists = fs.existsSync(path.join(__dirname, "example.txt"));
// console.log(exampleExists);

/* list contents of directory */
// const contents = fs.readdirSync(__dirname);
// console.log(contents);

/* to get stats of a file/directory */
// const stats = fs.lstatSync(path.join(__dirname, "example.txt"));
// console.log(stats);
// console.log(stats.isFile());
// console.log(stats.isDirectory());
