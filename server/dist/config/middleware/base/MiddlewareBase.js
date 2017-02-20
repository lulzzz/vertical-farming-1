"use strict";
/**
 * Created by alexanderlerma on 2/15/17.
 */
const express = require("express");
const bodyParser = require("body-parser");
const MethodOverride = require("./../MethodOverride");
const BaseRouter = require("../../routes/base/BaseRouter");
class MiddlewaresBase {
    static get configuration() {
        var app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRouter().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
module.exports = MiddlewaresBase;
