/**
 * Created by alexanderlerma on 2/19/17.
 */
import express = require("express");
import PhController = require("../../controller/PhController");

let router = express.Router();
class PhRouter {
    private _phController: PhController;

    constructor() {
        this._phController  = new PhController();
    }

    get routes () {
        let controller = this._phController;
        router.get("/ph", controller.retrieve);
        router.post("/ph", controller.create);
        router.put("/ph/:_id", controller.update);
        router.get("/ph/:_id", controller.findById);
        router.delete("/ph/:_id", controller.delete);
        return router;
    }
}

Object.seal(PhRouter);
export = PhRouter;
