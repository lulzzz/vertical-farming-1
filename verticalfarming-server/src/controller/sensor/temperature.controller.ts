/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {isUndefined} from "util";
import {injectable, inject} from "inversify";
import {TemperatureService} from "../../service/sensor/temperature.service";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {interfaces, Controller, Post, Get, Delete, Put} from "inversify-express-utils";

@Controller('/temperature')
@injectable()
export class TemperatureController implements interfaces.Controller {

    constructor(@inject(TYPES.TemperatureService) private temperatureService: TemperatureService) {}

    @Post('/')
    public create(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let temperature : ISensor;
            try {
                temperature = <ISensor>req.body;
            }
            catch (e) {
                res.send({"error": "error in your request" + temperature});
                reject(e)
            }

            this.temperatureService.create(temperature)
                .then(result => {
                    res.send({"success": "created object\n" + temperature});
                    resolve(result);
                })
                .catch((error) =>  {
                    res.send({"error": error});
                    reject(error);
                });
        });
    }

    @Put('/:_id')
    public update(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let temperature: ISensor;
            let sensorId: string;
            try {
                temperature = <ISensor>req.body;
                sensorId = req.params._id;
            } catch (e) {
                res.send({"error": "error in your request" + temperature});
                reject(e)
            }

            this.temperatureService.update(sensorId, temperature)
                .then((result) => {
                    res.send({"error": "error"});
                    resolve(result);
                })
                .catch((error) =>  {
                    res.send({"error": error});
                    reject(error);
                });
        });
    }

    @Delete('/:_id')
    public delete(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let _id: string;
            try {
                _id = req.params._id;
            } catch(e) {
                res.send({"error": "error"});
                reject(e);
            }
            this.temperatureService.delete(_id)
                .then(result => {
                    res.send({"success": result});
                    resolve(result);
                })
                .catch(error => {
                    res.send({"error": "error"});
                    reject(error);
                });
        });
    }

    @Get("/")
    public retrieve(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            this.temperatureService.retrieve()
                .then(result => {
                    res.send(result);
                    resolve(result);
                })
                .catch((error) => {
                    res.send({"error": error});
                    reject(error);
                });
        });
    }


    @Get(":_id")
    public findById(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let _id: string = req.params._id;
            this.temperatureService.findById(_id)
                .then(result => {
                    res.send(result);
                    resolve(result);
                })
                .catch((error) => {
                    res.send({"error": "error"});
                    reject(error);
                });
        });
    }
}
