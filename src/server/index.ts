import express, { Express, Request, Response } from "express";

// * Security
import cors from "cors";
import helmet from "helmet";

// TODO HTTPS

// * Routes
import rootRouter from "../routes";

// * Create the express app
const server: Express = express();

// * Define SERVER to uyse "/api" and use rootRouter
// From this point, all routes will be prefixed with "/api"
server.use("/api", rootRouter);

// TODO Moongoose Connection

// * Security configuration
server.use(helmet());
server.use(cors());

// * Content Type Config
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

// * Redirections
// http://localhost:8000/ redirect to http://localhost:8000/api/
server.get("/", (req: Request, res: Response) => {
  res.redirect("/api/");
});

export default server;
