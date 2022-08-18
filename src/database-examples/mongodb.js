import { MongoClient } from "mongodb";
import fsBase from "fs";
import path from "path";

const fs = fsBase.promises;

const execute = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //these are added to make mongodb backward compatible
  });
  const db = client.db("node-course");
  const newProductsString = await fs.readFile(
    path.join(__dirname, "new-products.txt"),
    "utf8"
  );
  const productNames = newProductsString.split(",");
  for (let productName of productNames) {
    await db.collection("products").insertOne({ name: productName });
  }
  console.log("Done importing products.");

  const products = await db.collection("products").find({}).toArray();
  console.log(products);

  client.close();
};

execute();
