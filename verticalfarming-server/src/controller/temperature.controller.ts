/**
 * Created by alexanderlerma on 2/15/17.
 */

import express = require("express");
import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import {IBaseController} from "./interfaces/base/base.controller";
import {isUndefined} from "util";
import {injectable} from "inversify";
import {TemperatureService} from "../service/sensor/temperature.service";


@injectable()
export class TemperatureController implements IBaseController<TemperatureService> {

    constructor(private temperatureService: TemperatureService) {}

    create(req: express.Request, res: express.Response): void {
        try {
            const temperature: ITemperatureModel = isUndefined(req.body.body) ?
                <ITemperatureModel>req.body : <ITemperatureModel>JSON.parse(req.body.body);
            this.temperatureService.create(temperature, (error, result) => {
                if(error) res.send({"error": error});
                else {
                    const io = req.app.get('socketio');
                    io.emit('data/success', result);
                    res.send({"success": result});
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            let Temperature: ITemperatureModel = <ITemperatureModel>req.body;
            let sensorId: string = req.params._id;
            this.temperatureService.update(sensorId, Temperature, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;
            this.temperatureService.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            this.temperatureService.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;
            this.temperatureService.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
