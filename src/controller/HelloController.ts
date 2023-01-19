import { Get, Query, Route, Tags } from "tsoa"
import { BasicResponse, ErrorResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as logger from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
  /**
   * Endpoint to retrieve a message "Hello {name}!" in JSON
   * @param {string | undefined} name Name to say hello
   * @returns { BasicResponse } Promise of BasicResponse
   */
  @Get("/")
  public async getMessage(@Query()name?: string): Promise<BasicResponse> {
    logger.logSuccess("[/api/hello] Get Request");
    return {
      message: `Hello ${name || "World"}!`,
    };
  }
}
