/**
 * Created by alexanderlerma on 2/19/17.
 */
import * as express from "express";
import {Controller, interfaces, Post, Get, RequestParam, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import {TYPES} from "../../config";
import {PhService} from "../../service";
import {ISensor} from "../../model";



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
    public update(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            const ph: ISensor = (req.body.body ? JSON.parse(req.body.body) : req.body);
            this.phService.update(id, ph)
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
            this.phService.delete(id)
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


    @Get("/:_id")
    public findById(@RequestParam(':_id') id: string, req: express.Request, res: express.Response): Promise<any> {
        return new Promise((resolve, reject) => {
            this.phService.findById(id)
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
