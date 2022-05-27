"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
function makeApp(database) {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.send("<h1>Hello world</h1>");
    });
    return app;
}
exports.default = makeApp;
