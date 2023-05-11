import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { useExpressServer } from "routing-controllers";
import { UserController } from "@/controllers/user";
import { appDataSource } from "./dataSource";
import { ErrorHandlerMiddleware, FinalMiddleware } from "@/middlewares/error";
import { HelmetMiddleware } from "@/middlewares/helmet";

const PORT = 3000;

// prepare express server
const app: express.Express = express();

useExpressServer(app, {
  controllers: [UserController],
  middlewares: [HelmetMiddleware, FinalMiddleware, ErrorHandlerMiddleware],
  routePrefix: "/api",
  defaultErrorHandler: false,
  cors: true,
});

// start server
appDataSource
  .initialize()
  .then(() => {
    app.listen(PORT);
    console.log(`listen on port ${PORT}`);
  })
  .catch((error) => console.error(error));
