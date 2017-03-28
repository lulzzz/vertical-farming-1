/**
 * Created by alexanderlerma on 2/19/17.
 */
import express = require("express");
import {PhController} from "../controller/ph.controller";

let router = express.Router();
export class PhRouter {
    private _phController: PhController;

    constructor() {
        this._phController  = new PhController();
    }

    get routes () {
        let controller = this._phController;
        router.get("/data", controller.retrieve);
        router.post("/data", controller.create);
        router.put("/data/:_id", controller.update);
        router.get("/data/:_id", controller.findById);
        router.delete("/data/:_id", controller.delete);
        return router;
    }
}