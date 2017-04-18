/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {PhService} from "../../service/sensor/ph.service";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {Post, Controller, Put, Get, Delete, interfaces} from "inversify-express-utils";
import {resolve} from "inversify/dts/resolution/resolver";


@Controller('/ph')
@injectable()
export class PhController implements interfaces.Controller {


    constructor(@inject(TYPES.PhService) private phService: PhService) {}

    @Post('/')
    public create(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let ph : ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);
            this.phService.create(ph)
                .then(result => {
                    res.send({"success": "created object\n" + ph});
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
            let ph: ISensor;
            let sensorId: string;
            try {
                ph = <ISensor>req.body;
                sensorId = req.params._id;
            } catch (e) {
                res.send({"error": "error in your request" + ph});
                reject(e)
            }

            this.phService.update(sensorId, ph)
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
            this.phService.delete(_id)
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
            this.phService.retrieve()
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
            this.phService.findById(_id)
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
