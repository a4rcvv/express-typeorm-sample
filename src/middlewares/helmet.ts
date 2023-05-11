import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import helmet from "helmet";

@Middleware({ type: "before" })
export class HelmetMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    helmet()(request, response, next);
  }
}
