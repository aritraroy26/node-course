import fsBase from "fs";
const fs = fsBase.promises;
import path from "path";

// fs.readFile(path.join(__dirname, "example.txt"), "utf8")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const execute = async () => {
  const filePath = path.join(__dirname, "example.txt");
  await fs.appendFile(filePath, "\nAppended from execute.", "utf8");
  const data = await fs.readFile(filePath, "utf8");
  console.log(data);
};

execute();
