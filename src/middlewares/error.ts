import { NextFunction, Request, Response } from "express";
import {
  ExpressErrorMiddlewareInterface,
  ExpressMiddlewareInterface,
  HttpError,
  Middleware,
  Middleware,
  NotFoundError,
} from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  error(
    error: HttpError,
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    const status = error.httpCode;
    const message = error.message;
    response.status(status).json({
      status: status,
      message: message,
    });
  }
}

@Middleware({ type: "after" })
export class FinalMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    response.status(404).json({
      status: 404,
      message: "url not found",
    });
  }
}
