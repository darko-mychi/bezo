
import { Route } from "@/lib/core/@types/Router";

import PagesController from "../controllers/pages.controller";

const routes: Route[] = [
    {
        path: "/",
        method: "get",
        handler: PagesController.index,
        name: "home",
    },
];

export default routes;
