import { RequestHandler } from "express";
import Responder from "@/lib/responder";
import User from "../models/user.model";

export default class AuthController {
    public static register: RequestHandler = async (req, res) => {
        const { phone, password } = req.body;

        try {
            const user = await User.create({ phone, password });
            
            Responder.success(res, user);
        } catch (error) {
            console.log(error.message, error.code);

            Responder.error(res, "An error occured!");
        }
    };
}
