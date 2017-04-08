import {ITemperatureService} from "../interfaces/temperature.service";
import {injectable, inject} from "inversify";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";


@injectable()
export class TemperatureService implements ITemperatureService {

    constructor (@inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository) {}

    create (item: ISensor, callback: (error: any, result: any) => void) {
        this.temperatureRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.temperatureRepository.retrieve(callback);
    }

    update (_id: string, item: ISensor, callback: (error: any, result: any) => void) {

        this.temperatureRepository.findById(_id, (err, res) => {
            if(err)
                callback(err, res);
            else
                this.temperatureRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this.temperatureRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ISensor) => void) {
        this.temperatureRepository.findById(_id, callback);
    }

    search(query: string, callback: (error: any, result: any) => void)  {
        this.temperatureRepository.search(query, callback);
    }
}