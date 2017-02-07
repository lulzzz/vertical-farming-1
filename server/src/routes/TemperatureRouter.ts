import {Router, Request, Response, NextFunction} from 'express';

//just for testing, setting up mongodb later
const Temps = [
  {id: 1, name:"temp1", temperature: 80.0},
  {id: 2, name:"temp2", temperature: 82.1}
];

export class TemperatureRouter {
  router: Router
  
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all temperature sensors
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
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

// Create the TemperatureRouter, and export its configured Express.Router
const temperatureRoutes = new TemperatureRouter();
temperatureRoutes.init();

export default temperatureRoutes.router;