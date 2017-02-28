import express = require("express");
import TemperatureRouter = require("../temperature.router");
import PhRouter = require("../ph.router");

let app = express();

class BaseRouter {

    get routes() {
        app.use("/", new TemperatureRouter().routes);
        app.use("/", new PhRouter().routes);
        return app;
    }
}

export = BaseRouter;