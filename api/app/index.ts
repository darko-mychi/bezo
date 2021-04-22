import express, { Application, json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import Responder from "@/lib/responder";
import Router from "@/lib/core/Router";
import DB from "@/lib/core/DB";
import routes from "./routes";

dotenv.config();

const app: Application = express();

(new DB).connect();

app.use(
  cors(),
  json(),
  helmet(),
  urlencoded({ extended: false })
);

const application = Router.run({ routes });

app.use(application);

app.use(function (_, res, next) {
  next(
    Responder.error(res, {
      message: "Resource not found!",
    }, 404)
  );
});

export default app;
