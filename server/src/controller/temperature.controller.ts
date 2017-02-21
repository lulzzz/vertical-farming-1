/**
 * Created by alexanderlerma on 2/15/17.
 */

import express = require("express");
import TemperatureBusiness = require("../service/temperature.service");
import {ITemperatureModel} from "../model/interfaces/temperature.model";
import {IBaseController} from "./interfaces/base/base.controller";


class TemperatureController implements IBaseController<TemperatureBusiness> {

    constructor() {

    }

    create(req: express.Request, res: express.Response): void {
        try {

            let Temperature: ITemperatureModel = <ITemperatureModel>req.body;
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.create(Temperature, (error, result) => {
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
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.update(sensorId, Temperature, (error, result) => {
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
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.delete(_id, (error, result) => {
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

            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.retrieve((error, result) => {
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
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.findById(_id, (error, result) => {
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
