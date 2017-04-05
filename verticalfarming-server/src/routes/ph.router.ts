/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {PhController} from "../controller/ph.controller";
import {injectable, inject} from "inversify";

@injectable()
export class PhRouter {

    private phController: PhController;

    constructor(@inject(PhController) phController: PhController) {
        this.phController = phController;
    }

    get routes () : express.Router {
        const router: express.Router = express.Router();
        router.get("/ph", this.phController.retrieve);
        router.post("/ph", this.phController.create);
        router.put("/ph/:_id", this.phController.update);
        router.get("/ph/:_id", this.phController.findById);
        router.delete("/ph/:_id", this.phController.delete);
        return router;
    }
}