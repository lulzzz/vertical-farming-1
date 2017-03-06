import express = require("express");

import {SearchRouter} from "../search.router";
import {TemperatureRouter} from "../temperature.router";
import {PhRouter} from "../ph.router";

let app = express();

export class BaseRouter {

    get routes() {
        app.use("/", new TemperatureRouter().routes);
        app.use("/", new PhRouter().routes);
        app.use("/", new SearchRouter().routes)
        return app;
    }
}