import { RequestHandler } from "express";
import Responder from "@/lib/responder";

export default class AuthController {
    public static register: RequestHandler = (req, res) => {
        const { phone, password } = req.body;

        Responder.success(res, {
            phone, password
        });
    };
}
