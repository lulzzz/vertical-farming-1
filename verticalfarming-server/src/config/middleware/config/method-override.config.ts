import * as express from "express";
const methodOverride = require("method-override");

export class MethodOverride {

    static configuration () : express.Express {
        const app : express.Express = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));
        return app;
    }
}