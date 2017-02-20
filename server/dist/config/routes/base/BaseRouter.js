"use strict";
const express = require("express");
const TemperatureRouter = require("../TemperatureRouter");
const PhRouter = require("../PhRouter");
let app = express();
class BaseRouter {
    get routes() {
        app.use("/", new TemperatureRouter().routes);
        app.use("/", new PhRouter().routes);
        return app;
    }
}
module.exports = BaseRouter;
