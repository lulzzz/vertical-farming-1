/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import bodyParser = require("body-parser");
import expressValidator = require('express-validator');
import {BaseRouter} from "../../../routes/base/base.router";
import {MethodOverride} from "../method-override.config";
import {injectable} from "inversify";

@injectable()
export class MiddlewaresBase {

    constructor(private baseRouter: BaseRouter) {}

    public configuration () : express.Application {
        let app: express.Application = express();
        app.use(bodyParser.json());
        app.use(expressValidator());
        app.use(MethodOverride.configuration());
        app.use(this.baseRouter.routes);
        return app;
    }
}