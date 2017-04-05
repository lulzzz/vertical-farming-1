/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {MainRouter} from "../../routes/main.router";
import {MethodOverride} from "./config/method-override.config";
import {injectable, inject} from "inversify";
import bodyParser = require("body-parser");

@injectable()
export class Middleware {

    private mainRouter: MainRouter;

    constructor(@inject(MainRouter) mainRouter: MainRouter) {
        this.mainRouter = mainRouter;
    }

    public configuration () : express.Express {
        const app: express.Express = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(this.mainRouter.routes);
        return app;
    }
}