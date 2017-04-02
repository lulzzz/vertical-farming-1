/**
 * Created by alexanderlerma on 2/19/17.
 */

import express = require("express");
import {IPhModel} from "../model/interfaces/sensor/ph.model";
import {IBaseController} from "./interfaces/base/base.controller";
import {PhService} from "../service/sensor/ph.service";
import {injectable} from "inversify";


@injectable()
export class PhController implements IBaseController<PhService> {

    constructor(private phService: PhService) {}

    create(req: express.Request, res: express.Response): void {
        try {
            let Ph: IPhModel = <IPhModel>req.body;
            this.phService.create(Ph, (error, result) => {
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
            let Ph: IPhModel = <IPhModel>req.body;
            let sensorId: string = req.params._id;
            
            this.phService.update(sensorId, Ph, (error, result) => {
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
            
            this.phService.delete(_id, (error, result) => {
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
            
            this.phService.retrieve((error, result) => {
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
            
            this.phService.findById(_id, (error, result) => {
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
