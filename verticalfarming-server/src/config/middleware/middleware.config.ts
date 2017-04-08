/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {MethodOverride} from "./config/method-override.config";
import bodyParser = require("body-parser");

export class Middleware {

    public static configuration () : express.Express {
        const app: express.Express = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        return app;
    }
}