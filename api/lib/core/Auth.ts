import jwt from "jsonwebtoken";

export default class Auth {
    /**
     * static createToken
     */
    public static createToken(id: string) {
        const { JWT_SECRET, JWT_LIFETIME } = process.env;

        return jwt.sign({ id }, JWT_SECRET || "", {
            expiresIn: JWT_LIFETIME
        });
    }
}