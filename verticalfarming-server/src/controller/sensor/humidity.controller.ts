/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {Post, Controller, Put, Get, Delete, interfaces} from "inversify-express-utils";
import {HumidityService} from "../../service/sensor/humidity.service";


@Controller('/humidity')
@injectable()
export class HumidityController implements interfaces.Controller {


    constructor(@inject(TYPES.HumidityService) private humidityService: HumidityService) {}

    @Post('/')
    public create(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(req.body);
            let humidity : ISensor = (req.body.body ? req.body.body : req.body) as ISensor;
            this.humidityService.create(humidity)
                .then(result => {
                    res.send({"success": "created object\n" + JSON.stringify(humidity)});
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
            let humidity: ISensor;
            let sensorId: string;
            try {
                humidity = <ISensor>req.body;
                sensorId = req.params._id;
            } catch (e) {
                res.send({"error": "error in your request" + humidity});
                reject(e)
            }

            this.humidityService.update(sensorId, humidity)
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
            this.humidityService.delete(_id)
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
            this.humidityService.retrieve()
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
            this.humidityService.findById(_id)
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
