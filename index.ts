import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create the express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first route of the app
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to API: RESTful Express + TS + Swagger + Moongose");
});

// Execute APP and listen requests to PORT

app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
