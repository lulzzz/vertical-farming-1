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
    this.router.get("/temperature", controller.retrieve);
    this.router.post("/temperature", controller.create);
    this.router.put("/temperature/:_id", controller.update);
    this.router.get("/temperature/:_id", controller.findById);
    this.router.delete("/temperature/:_id", controller.delete);
    return this.router;
  }
}
