import * as express from "express";
import {TemperatureController} from "../controller/temperature.controller";
import {injectable, inject} from "inversify";

@injectable()
export class TemperatureRouter {

  private temperatureController: TemperatureController;

  constructor(@inject(TemperatureController) temperatureController: TemperatureController) {
    this.temperatureController = temperatureController;
    console.log(this.temperatureController);
  }

  get routes () : express.Router {
    const router: express.Router = express.Router();
    console.log('temperature router ', router);
    router.get("/temperature", this.temperatureController.retrieve);
    router.post("/temperature", this.temperatureController.create);
    router.put("/temperature/:_id", this.temperatureController.update);
    router.get("/temperature/:_id", this.temperatureController.findById);
    router.delete("/temperature/:_id", this.temperatureController.delete);
    return router;
  }
}
