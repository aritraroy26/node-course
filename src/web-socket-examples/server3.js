import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const createSocketClient = (name, interval) => {
  socket.on("connect", () => {
    console.log(`${name} connected`);

    setInterval(() => {
      socket.emit("message", `Hello from ${name}`);
    }, interval);
  });

  socket.on("disconnect", () => {
    console.log(`${name} diconnected.`);
  });
};

createSocketClient("ClientServer1", 2000);
createSocketClient("ClientServer2", 5000);
