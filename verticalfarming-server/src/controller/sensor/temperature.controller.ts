/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as express from "express";
import {injectable, inject} from "inversify";
import {TemperatureService} from "../../service";
import {ISensor} from "../../model";
import {TYPES} from "../../config";
import {interfaces, Controller, Post, Get, Delete, Put, RequestParam} from "inversify-express-utils";

@Controller('/temperature')
@injectable()
export class TemperatureController implements interfaces.Controller {

    constructor(@inject(TYPES.TemperatureService) private temperatureService: TemperatureService) {}

    @Post('/')
    public create(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            let temperature : ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);
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
    public update(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            const temperature : ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);
            this.temperatureService.update(id, temperature)
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
    public delete(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            this.temperatureService.delete(id)
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


    @Get("/:_id")
    public findById(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            this.temperatureService.findById(id)
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
