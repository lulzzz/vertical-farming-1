/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model";
import {TYPES} from "../../config";
import {Post, Controller, Put, Get, Delete, interfaces, RequestParam} from "inversify-express-utils";
import {HumidityService} from "../../service";


@Controller('/humidity')
@injectable()
export class HumidityController implements interfaces.Controller {


    constructor(@inject(TYPES.HumidityService) private humidityService: HumidityService) {}

    @Post('/')
    public create(req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            const humidity : ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);
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
    public update(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            const humidity : ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);

            this.humidityService.update(id, humidity)
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
            this.humidityService.delete(id)
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


    @Get("/:_id")
    public findById(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            // const _id: string = req.params._id;
            this.humidityService.findById(id)
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
