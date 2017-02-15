import express = require("express");
import TemperatureRouter = require("../TemperatureRouter");
let app = express();

class BaseRouter {

    get routes() {
        app.use("/", new TemperatureRouter().routes);
        return app;
    }
}

export = BaseRouter;