/**
 * Created by alexanderlerma on 2/28/17.
 */
import express = require("express");
import TemperatureController = require("../../controller/temperature.controller");

const router = express.Router();
class TemperatureRouter {
    private _temperatureController: TemperatureController;

    constructor() {
        this._temperatureController  = new TemperatureController();
    }

    get routes () {
        let controller = this._temperatureController;
        router.get("/temperature", controller.retrieve);
        router.post("/temperature", controller.create);
        router.put("/temperature/:_id", controller.update);
        router.get("/temperature/:_id", controller.findById);
        router.delete("/temperature/:_id", controller.delete);
        return router;
    }
}

Object.seal(TemperatureRouter);
export = TemperatureRouter;
