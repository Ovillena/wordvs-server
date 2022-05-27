import { IDatabase } from "./_Interfaces";
import express from "express";
import "reflect-metadata";
import cors from "cors";

export default function makeApp(database: IDatabase) {
  const app = express();

  const indexRouter = require("./routes/index");

  app.use(express.json());
  app.use(cors());
  app.use("/", indexRouter);

  app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
  });

  return app;
}
