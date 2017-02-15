/**
 * Created by alexanderlerma on 2/15/17.
 */
import express = require("express");
import bodyParser = require("body-parser");
import MethodOverride = require("./../MethodOverride");
import BaseRouter = require("../../routes/base/BaseRouter");


class MiddlewaresBase {

    static get configuration () {
        var app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRouter().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;