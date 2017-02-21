/**
 * Created by alexanderlerma on 2/15/17.
 */

import express = require("express");
import TemperatureService = require("../service/temperature.service");
import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import {IBaseController} from "./interfaces/base/base.controller";


class TemperatureController implements IBaseController<TemperatureService> {

    constructor() {

    }

    create(req: express.Request, res: express.Response): void {
        try {

            let Temperature: ITemperatureModel = <ITemperatureModel>req.body;
            let temperatureService = new TemperatureService();
            temperatureService.create(Temperature, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
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
            let temperatureService = new TemperatureService();
            temperatureService.update(sensorId, Temperature, (error, result) => {
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
            let temperatureService = new TemperatureService();
            temperatureService.delete(_id, (error, result) => {
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

            let temperatureService = new TemperatureService();
            temperatureService.retrieve((error, result) => {
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
            let temperatureService = new TemperatureService();
            temperatureService.findById(_id, (error, result) => {
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

export = TemperatureController;
