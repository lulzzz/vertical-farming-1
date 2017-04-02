import express = require("express");

import {SearchRouter} from "../search.router";
import {TemperatureRouter} from "../temperature.router";
import {PhRouter} from "../ph.router";
import {injectable} from "inversify";

let app = express();

@injectable()
export class BaseRouter {

    constructor(private temperatureRouter: TemperatureRouter,
                private phRouter: PhRouter,
                private searchRouter: SearchRouter) {}

    get routes() {
        app.use("/", this.temperatureRouter.routes);
        app.use("/", this.phRouter.routes);
        app.use("/", this.searchRouter.routes)
        return app;
    }
}