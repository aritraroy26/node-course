import mysql from "mysql";
import fs from "fs";
import path from "path";

const connection = mysql.createConnection({
  host: "localhost",
  database: "node_course_schema",
  user: "node_course_user",
  password: "password",
});

connection.connect(); // this is a sync call

fs.readFile(
  path.join(__dirname, "sports-products.txt"),
  "utf8",
  (err, content) => {
    if (err) return console.log(err);
    const productsString = content.split("\n");
    const products = productsString.map((product, index) => ({
      id: index + 1,
      name: product.split(",")[0],
      price: Number(product.split(",")[1]),
    }));
    const productsInArray = products.map((product) => [
      product.id,
      product.name,
      product.price,
    ]);
    connection.query(
      "INSERT INTO products (id, name, price) VALUES ?",
      [productsInArray],
      (err, results) => {
        if (err) console.log(err);
        else {
          console.log("Done inserting products.\n");
        }
      }
    );

    connection.query("SELECT * FROM products", (err, results) => {
      if (err) console.log(err);
      else {
        console.log("Current products:\n");
        console.log(results);
      }
    });

    connection.end();
  }
);
