"use strict";
const express = require("express");
const TemperatureController = require("../../controller/TemperatureController");
var router = express.Router();
class TemperatureRouter {
    constructor() {
        this._temperatureController = new TemperatureController();
    }
    get routes() {
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
module.exports = TemperatureRouter;
