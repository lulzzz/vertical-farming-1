/**
 * Created by alexanderlerma on 2/15/17.
 */
import {Request, Response} from "express";
import {IBaseController} from "./interfaces/base/base.controller";
import {isUndefined} from "util";
import {injectable, inject} from "inversify";
import {TemperatureService} from "../service/sensor/temperature.service";
import {ISensor} from "../model/interfaces/sensor/base.sensor";


@injectable()
export class TemperatureController implements IBaseController<TemperatureService> {

    private temperatureService: TemperatureService;

    constructor(@inject(TemperatureService) temperatureService: TemperatureService) {
        this.temperatureService = temperatureService;
    }

    create(req: Request, res: Response): void {
        try {
            const temperature: ISensor = isUndefined(req.body.body) ?
                <ISensor>req.body : <ISensor>JSON.parse(req.body.body);
            this.temperatureService.create(temperature, (error, result) => {
                if(error) res.send({"error": error});
                else {
                    const io = req.app.get('socketio');
                    io.emit('data/success', result);
                    res.send({"success": result});
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: Request, res: Response): void {
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
    delete(req: Request, res: Response): void {
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
    retrieve(req: Request, res: Response): void {
        console.log('hello');
        console.log(req);
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
    findById(req: Request, res: Response): void {
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
