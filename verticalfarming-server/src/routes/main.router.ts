import * as express from "express";
import {SearchRouter} from "./search.router";
import {TemperatureRouter} from "./temperature.router";
import {PhRouter} from "./ph.router";
import {injectable} from "inversify";

@injectable()
export class MainRouter {

    constructor(private temperatureRouter: TemperatureRouter,
                private phRouter: PhRouter,
                private searchRouter: SearchRouter) {}

    get routes() : express.Router {
        const router: express.Router = express.Router();
        router.use("/", this.temperatureRouter.routes);
        router.use("/", this.phRouter.routes);
        router.use("/", this.searchRouter.routes);
        return router;
    }
}