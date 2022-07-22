import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
export class ChatController {
  private getSocketGameRoom(socket: Socket): string {
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (roomName) => roomName !== socket.id
    );
    const gameRoom = socketRooms && socketRooms[0];
    return gameRoom;
  }

  @OnMessage("update_chat")
  public async updateGame(
    @SocketIO() io: Server,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ) {
    const gameRoom = this.getSocketGameRoom(socket);
    console.log("game update : ", JSON.stringify(message));
    socket.to(gameRoom).emit("on_chat_update", message);
  }
}
