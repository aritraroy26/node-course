import fs from "fs";
import path from "path";

/* read file */
// fs.readFile(path.join(__dirname, "/test.txt"), "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

/* write file */
// fs.writeFile(
//   path.join(__dirname, "/writeFile.txt"), //if file exists with same name, it deletes the existing file
//   "Hello World!",
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File written successfully");
//     }
//   }
// );

/* append file */
// fs.appendFile(
//   path.join(__dirname, "/writeFile.txt"),
//   "\nI am added here.",
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File appended successfully");
//     }
//   }
// );

/* delete file */
// fs.unlink(path.join(__dirname, "/writeFile.txt"), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

/* order of calling using callbacks */
// fs.appendFile(
//   path.join(__dirname, "example.txt"),
//   "\nAppended text",
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       fs.readFile(path.join(__dirname, "example.txt"), "utf8", (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   }
// );
