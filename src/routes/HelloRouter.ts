import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import * as logger from "../utils/logger";

// Router from express
let helloRouter = express.Router();

// GET -> /api/hello?name=.../
helloRouter.route("/").get(async (req: Request, res: Response) => {
  const name: any = req?.query?.name;
  logger.logInfo(`Query param: ${name}`);
  // Controller instance to execute method
  const helloController: HelloController = new HelloController();
  // Obtain response from controller
  const response = await helloController.getMessage(name);
  return res.send(response);
});

export default helloRouter;
