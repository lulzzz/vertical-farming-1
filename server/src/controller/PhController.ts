/**
 * Created by alexanderlerma on 2/19/17.
 */
/**
 * Created by alexanderlerma on 2/15/17.
 */

import express = require("express");
import PhBusiness = require("../business/PhBusiness");
import {IPhModel} from "../model/interfaces/IPhModel";
import {IBaseController} from "./interfaces/base/IBaseController";


class PhController implements IBaseController<PhBusiness> {

    constructor() {

    }

    create(req: express.Request, res: express.Response): void {
        try {

            let Ph: IPhModel = <IPhModel>req.body;
            let phBusiness = new PhBusiness();
            phBusiness.create(Ph, (error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.update(sensorId, Ph, (error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.delete(_id, (error, result) => {
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

            let phBusiness = new PhBusiness();
            phBusiness.retrieve((error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.findById(_id, (error, result) => {
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

export = PhController;
