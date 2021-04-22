
import { Route } from "@/lib/core/@types/Router";

import AuthController from "../controllers/auth.controller";
import PagesController from "../controllers/pages.controller";

const routes: Route[] = [
    {
        path: "/",
        method: "get",
        handler: PagesController.index,
        name: "home",
    },
    {
        path: "/auth/register",
        method: "post",
        handler: AuthController.register,
        name: "register"
    }
];

export default routes;
