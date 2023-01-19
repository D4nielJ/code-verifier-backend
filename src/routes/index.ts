/**
 * Root Router
 * Redirections to other routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import * as logger from "@/utils/logger";

// Server instance from express
const server = express();

// Router instace from express
const rootRouter = express.Router();

// Activates for requests to /api
// GET: /api/
rootRouter.get("/", (req: Request, res: Response) => {
  logger.logInfo("GET: /api/");
  res.send("Welcome to API: RESTful Express + TS + Swagger + Moongose");
});

// Redirections to Routers & Controllers
server.use("/", rootRouter);
server.use("/hello", helloRouter);

export default server;
