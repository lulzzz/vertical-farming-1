/**
 * Created by alexanderlerma on 2/15/17.
 */
import express = require("express");
import bodyParser = require("body-parser");
import MethodOverride = require("../method-override.config");
import BaseRouter = require("../../routes/base/base.router");


class MiddlewaresBase {

    static get configuration () {
        let app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRouter().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;