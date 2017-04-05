/**
 * Created by alexanderlerma on 2/19/17.
 */
import {Request, Response} from "express";
import {IBaseController} from "./interfaces/base/base.controller";
import {PhService} from "../service/sensor/ph.service";
import {injectable, inject} from "inversify";
import {ISensor} from "../model/interfaces/sensor/base.sensor";


@injectable()
export class PhController implements IBaseController<PhService> {

    private phService: PhService;

    constructor(@inject(PhService) phService: PhService) {
        this.phService = phService;
    }

    create(req: Request, res: Response): void {
        try {
            let Ph: ISensor = <ISensor>req.body;
            this.phService.create(Ph, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    update(req: Request, res: Response): void {
        try {
            let Ph: ISensor = <ISensor>req.body;
            let sensorId: string = req.params._id;

            this.phService.update(sensorId, Ph, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    delete(req: Request, res: Response): void {
        try {

            let _id: string = req.params._id;

            this.phService.delete(_id, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    retrieve(req: Request, res: Response): void {
        try {

            this.phService.retrieve((error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    findById(req: Request, res: Response): void {
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
