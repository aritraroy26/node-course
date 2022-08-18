import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
/* this tells the express server to watch out for json payload, 
   which when received is added to the request object*/

app.use(bodyParser.text());
/* bodyParser is another way to tell server to expect certain kind of request body.
   This tells the express server to watch out for text payload, 
   which when received is added to the request object*/

app.get("/hello", (req, res) => {
  console.log("Received get request on path /hello");
  res.send("Hello from express!");
});

const users = [
  {
    id: 1,
    name: "Aritra",
  },
  {
    id: 12,
    name: "Joy",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const result = users.find((item) => item.id === userId);
  res.send(result);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});

app.post("/updateName", (req, res) => {
  const name = req.body;
  users.map((user) => {
    if (user.id === 1) user.name = name;
  });
  res.send(users);
});

app.listen(3000, () => {
  console.log("Express server is listening on port 3000");
});
