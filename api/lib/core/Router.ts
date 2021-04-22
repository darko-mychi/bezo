import express from "express";
import { RouterData, RouterOptions } from "./@types/Router";

class Router {
    /**
     * options
     */
    private static options(options: RouterOptions) {
        let expressOptions: any = { ...options };

        delete expressOptions.routes;

        const router: RouterData = [express.Router(expressOptions), options.routes];

        return router;
    }

    /**
     * Run the app router
     * 
     * @param options The router options (same as express' options + routes)
     * @returns void
     */
    public static run(options: RouterOptions) {
        const [router, routes] = this.options(options);

        routes.forEach(({ path, method, handler, middleware }) => {
            if (!middleware) {
                middleware = [];
            }

            router[method](
              path,
              ...middleware,
              (req: any, res: any, next: any) => handler(req, res, next),
            );
        });

        return router;
    }
}

export default Router;
