import dotenv from "dotenv";
import server from "./server";
import * as logger from "./utils/logger";

// * Environment variables
dotenv.config();
const port: string | number = process.env.PORT || 8000;

// * Start the server
server.listen(port, () => {
  logger.logSuccess(`Server is running on port ${port}`);
});

// * Control Server Error
server.on("error", (error) => {
  logger.logError(`[SERVER ERROR] ${error}`);
});
