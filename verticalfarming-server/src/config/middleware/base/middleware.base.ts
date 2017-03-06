/**
 * Created by alexanderlerma on 2/15/17.
 */
import express = require("express");
import bodyParser = require("body-parser");
import expressValidator = require('express-validator');
import {BaseRouter} from "../../../routes/base/base.router";
import {MethodOverride} from "../method-override.config";


export class MiddlewaresBase {

    static get configuration () {
        let app = express();
        app.use(bodyParser.json());
        app.use(expressValidator());
        app.use(MethodOverride.configuration());
        app.use(new BaseRouter().routes);
        return app;
    }
}