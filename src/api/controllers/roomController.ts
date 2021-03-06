import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
export class RoomController {
  @OnMessage("join_game")
  public async joinGame(
    @SocketIO() io: Server,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ) {
    console.log("New user joining room: ", message);

    const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (room) => room !== socket.id
    );

    if (
      // cannot join more than 1 room. final product may not have this
      socketRooms.length > 0 ||
      (connectedSockets && connectedSockets.size === 2)
    ) {
      socket.emit("room_joined_error", {
        error: "Room is full, pls choose another room to play",
      });
    } else {
      await socket.join(message.roomId);
      socket.emit("room_joined");

      if (connectedSockets?.size === 2) {
        console.log("emitted start game"); //differentiate players and player turns when game start
        socket.emit("start_game", { start: true, turn: true, player: 1 });
        socket
          .to(message.roomId)
          .emit("start_game", { start: true, turn: false, player: 0 });
      }
    }
  }
}
