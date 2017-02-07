"use strict";
const express_1 = require("express");
//just for testing, setting up mongodb later
const Temps = [
    { id: 1, name: "temp1", temperature: 80.0 },
    { id: 2, name: "temp2", temperature: 82.1 }
];
class TemperatureRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all temperature sensors
     */
    getAll(req, res, next) {
        res.send(Temps);
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.TemperatureRouter = TemperatureRouter;
// Create the TemperatureRouter, and export its configured Express.Router
const temperatureRoutes = new TemperatureRouter();
temperatureRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = temperatureRoutes.router;
