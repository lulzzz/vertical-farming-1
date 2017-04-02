import {TemperatureController} from "../controller/temperature.controller";
import {Router} from 'express';
import {injectable} from "inversify";

@injectable()
export class TemperatureRouter {
  private router: Router;

  constructor(private _temperatureController: TemperatureController) {
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
