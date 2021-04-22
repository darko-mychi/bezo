import express, { RequestHandler, RouterOptions as ExpressOptions } from "express";

export interface RouterOptions extends ExpressOptions {
    routes: Route[];
};

export interface Route {
    path: string;
    name?: string;
    method: "get" | "post" | "put" | "patch" | "delete";
    handler: RequestHandler<any>;
    middleware?: RequestHandler<any>[];
};

export type RouterData = [express.Router, Route[]];
