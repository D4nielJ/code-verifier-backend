import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { check, validationResult } from "express-validator";

// Configuration the .env file
dotenv.config();

// Create the express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first route of the app
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to API: RESTful Express + TS + Swagger + Moongose");
});

// Define HelloWorld route
app.get(
  "/hello",
  [
    check("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 chars long"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const name = req.query.name || "anonymous";
    res.send(`Hello, ${name}!`);
  }
);

// define GoodBye route
app.get("/bye", (req: Request, res: Response) => {
  res.send("Goodbye, world!");
});

// Execute APP and listen requests to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
