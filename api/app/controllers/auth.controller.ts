import { RequestHandler } from "express";
import Responder from "@/lib/responder";

export default class AuthController {
    public static register: RequestHandler = (_, res) => {
        Responder.success(res, {
            message: "Register handler",
        });
    };
}
