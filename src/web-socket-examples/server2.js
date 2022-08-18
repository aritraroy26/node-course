import { io } from "socket.io-client";
//whoever initiates the connection uses the socket.io-client package

//this establishes connection with other server
const socket = io("http://localhost:8000");

//this event happens when the client establishes connection with server
socket.on("connect", () => {
  console.log("Connected.");

  setInterval(() => {
    const randomNumber = Math.ceil(Math.random() * 100);
    socket.emit("newNumber", `Here's your random number ${randomNumber}`);
  }, 2000);
});

socket.on("newGuid", (data) => {
  console.log(`Received message from server1: ${data.message}`);
});

socket.on("disconnect", () => {
  console.log("Disconnected!");
});
