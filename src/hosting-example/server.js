import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Heroku!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("app is listening on port " + PORT);
});

// in order to avoid running the hosted code using babel, we transpile the code using babel and use that code to host
// heroku expects a start script in package.json
// we need to tell heroku the node version to run. we do this by mentioning the version in engines in package.json
