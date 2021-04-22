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

            const errors: any = {};

            if (error.message.includes("user validation failed")) {
                Object.values(error.errors).forEach(({ properties }: any) => {
                    const { path, message } = properties;
                    errors[path] = message;
                });
            }

            if (error.code === 11000) {
                errors.phone = "Phone number already registered!";
            }

            Responder.error(res, errors);
        }
    };
}
