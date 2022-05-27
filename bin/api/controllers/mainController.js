"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const socket_controllers_1 = require("socket-controllers");
let MainController = class MainController {
    onConnection(socket, io) {
        console.log("New Socket connected: ", socket.id);
        //   socket.on("custom_event", (data: any) => {
        //     console.log("Data: ", data);
        //   });
    }
};
__decorate([
    (0, socket_controllers_1.OnConnect)(),
    __param(0, (0, socket_controllers_1.ConnectedSocket)()),
    __param(1, (0, socket_controllers_1.SocketIO)())
], MainController.prototype, "onConnection", null);
MainController = __decorate([
    (0, socket_controllers_1.SocketController)()
], MainController);
exports.MainController = MainController;
