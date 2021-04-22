import { Response } from "express";
import { JSONRes, JSONResStatus } from "./@types";

class Responder {
    /**
     * success
     */
    private static send(res: Response, data: any, status: JSONResStatus, code: number = 200)
    {
        return res.status(code).send(this.build(data, status));
    }

    private static build(data: any, status: JSONResStatus)
    {
        const response: JSONRes = {
            status,
            data
        };

        return response;
    }

    /**
     * success
     */
    public static success(res: Response, data: any, code: number = 200)
    {
        return this.send(res, data, "success", code);
    }

    /**
     * success
     */
    public static error(res: Response, message: any, code: number = 500)
    {
        return this.send(res, message, "error", code);
    }
}

export default Responder;
