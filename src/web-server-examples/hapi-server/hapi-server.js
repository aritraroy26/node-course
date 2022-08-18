import Hapi from "@hapi/hapi";
import { usersRoute, firstUser } from "./hapi-routes.js";

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

const routes = [usersRoute, firstUser];

server.route({
  method: "GET",
  path: "/hello",
  handler: async (req, h) => {
    //h is called the response toolkit, used to add headers and other things
    return "Hello from Hapi!";
  },
});

routes.forEach((route) => {
  server.route(route);
});

server.start().then(() => {
  console.log("Hapi server is listening on port 3000");
});
