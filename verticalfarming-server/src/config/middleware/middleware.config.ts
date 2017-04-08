/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {MethodOverride} from "./method-override.config";
import bodyParser = require("body-parser");
const morgan = require('morgan');

export class Middleware {

    public static configuration () : express.Express {
        const app: express.Express = express();
        app.use(bodyParser.json());
        app.use(morgan('combined'));
        app.use(MethodOverride.configuration());
        return app;
    }
}