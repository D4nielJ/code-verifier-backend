import { BasicResponse, ErrorResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as logger from "../utils/logger";

export class HelloController implements IHelloController {
  public async getMessage(name?: string): Promise<BasicResponse> {
    logger.logSuccess("[/api/hello] Get Request");
    return {
      message: `Hello ${name || "World"}!`,
    };
  }
}
