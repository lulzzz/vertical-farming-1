"use strict";
const express = require("express");
const TemperatureRouter = require("../TemperatureRouter");
let app = express();
class BaseRouter {
    get routes() {
        app.use("/", new TemperatureRouter().routes);
        return app;
    }
}
module.exports = BaseRouter;
