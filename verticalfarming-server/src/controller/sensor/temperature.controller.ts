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

    @Post("/")
    create(req: express.Request, res: express.Response): void {
        try {
            const temperature: ISensor = isUndefined(req.body.body) ?
                <ISensor>req.body : <ISensor>JSON.parse(req.body.body);
            this.temperatureService.create(temperature, (error, result) => {
                if(error) res.send({"error": error});
                else {
                    res.send({"success": result});
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    @Put(":_id")
    update(req: express.Request, res: express.Response): void {
        try {
            let Temperature: ISensor = <ISensor>req.body;
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

    @Delete("/:_id")
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

    @Get("/")
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

    @Get("/:_id")
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
