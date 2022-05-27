import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";
import * as http from "http";

export default (httpServer: http.Server) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  // io.on("connection", (socket) => {

  // });

  useSocketServer(io, {
    controllers: [__dirname + "/api/controllers/*.ts"],
  });

  return io;
};
