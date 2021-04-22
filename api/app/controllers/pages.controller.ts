import { RequestHandler } from "express";
import Responder from "@/lib/responder";

export default class PagesController {
  public static index: RequestHandler = (_, res) => {
    Responder.success(res, {
      message: "Welcome to Bezo API",
    });
  } 
}
