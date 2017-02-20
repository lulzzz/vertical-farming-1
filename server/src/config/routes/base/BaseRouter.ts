import express = require("express");
import TemperatureRouter = require("../TemperatureRouter");
import PhRouter = require("../PhRouter");

let app = express();

class BaseRouter {

    get routes() {
        app.use("/", new TemperatureRouter().routes);
        app.use("/", new PhRouter().routes);
        return app;
    }
}

export = BaseRouter;