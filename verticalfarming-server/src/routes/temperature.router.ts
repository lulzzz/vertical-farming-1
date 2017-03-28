import {TemperatureController} from "../controller/temperature.controller";
import {Router} from 'express';

export class TemperatureRouter {
  private _temperatureController: TemperatureController;
  private router: Router;

  constructor() {
    this._temperatureController  = new TemperatureController();
    this.router = Router();
  }

  get routes () {
    let controller = this._temperatureController;
    this.router.get("/data", controller.retrieve);
    this.router.post("/data", controller.create);
    this.router.put("/data/:_id", controller.update);
    this.router.get("/data/:_id", controller.findById);
    this.router.delete("/data/:_id", controller.delete);
    return this.router;
  }
}
