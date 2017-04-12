/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {MethodOverride} from "./method-override.config";
import bodyParser = require("body-parser");
const morgan = require('morgan');

export class Middleware {

    private static allowCrossDomain (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };

    public static configuration () : express.Express {
        const app: express.Express = express();
        app.use(bodyParser.json());
        app.use(this.allowCrossDomain);
        app.use(morgan('combined'));
        app.use(MethodOverride.configuration());
        return app;
    }
}