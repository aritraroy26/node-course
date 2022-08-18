import express from "express";
import http from "http";
import socketIo from "socket.io";
import aguid from "aguid";

const app = express();
const server = http.createServer(app);
const io = socketIo(server); //this determines how is the server going to respond when it receives certain events

//connection event occurs when any client connects with the server and establishes a web socket connection
io.on("connection", (socket) => {
  console.log(`Connected to: ${socket.client.id}`);

  socket.on("newNumber", (eventData) => {
    console.log(eventData);
    // socket.emit("newGuid", { message: `Here's your random guid: ${aguid()}` });
  });

  setInterval(() => {
    socket.emit("newGuid", { message: `Here's your random guid: ${aguid()}` });
  }, 2000);

  socket.on("message", (data) => {
    console.log(data);
  });

  //this event occurs whenever the client disconnects for browser closing, server disconnection or any such reason
  socket.on("disconnect", () => {
    console.log(`Disconnected from: ${socket.client.id}`);
  });
});

server.listen(8000, () => {
  console.log("Waiting for connections on port 8000");
});
