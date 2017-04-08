/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {PhService} from "../../service/sensor/ph.service";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {Post, Controller, Put, Get, Delete, interfaces} from "inversify-express-utils";


@Controller('/ph')
@injectable()
export class PhController implements interfaces.Controller {


    constructor(@inject(TYPES.PhService) private phService: PhService) {}

    @Post('/')
    create(req: express.Request, res: express.Response): void {
        try {
            let Ph: ISensor = <ISensor>req.body;
            this.phService.create(Ph, (error, result) => {
                if (error)
                    return res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    @Put('/:_id')
    update(req: express.Request, res: express.Response): void {
        try {
            let Ph: ISensor = <ISensor>req.body;
            let sensorId: string = req.params._id;

            this.phService.update(sensorId, Ph, (error, result) => {
                if (error) return res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    @Delete('/:_id')
    delete(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;

            this.phService.delete(_id, (error, result) => {
                if (error) return res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    @Get("/")
    retrieve(req: express.Request, res: express.Response): void {
        try {

            this.phService.retrieve((error, result) => {
                if (error) return res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }


    @Get(":_id")
    findById(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;

            this.phService.findById(_id, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
