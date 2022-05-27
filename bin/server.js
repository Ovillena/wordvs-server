"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
const http_1 = __importDefault(require("http"));
const socket_1 = __importDefault(require("./socket"));
require("reflect-metadata");
const debug = require("debug")("socketio-server:server");
const app = (0, app_1.default)(database_1.default);
// app.listen(8080, () => console.log("listening on port 8080"));
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
const io = (0, socket_1.default)(server);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + (addr === null || addr === void 0 ? void 0 : addr.port);
    debug("Listening on " + bind);
    console.log("Server Running on Port: ", port);
}
