import {ITemperatureService} from "../interfaces/temperature.service";
import {injectable, inject} from "inversify";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";


@injectable()
export class TemperatureService implements ITemperatureService {

    constructor (@inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository) {}

    public create (item: ISensor) : Promise<any> {
        return this.temperatureRepository.create(item);
    }

    public retrieve () : Promise<any> {
        return this.temperatureRepository.retrieve();
    }

    public update (_id: string, sensor: ISensor) : Promise<any> {
        return this.temperatureRepository.findById(_id);
    }

    public delete (_id: string) : Promise<any> {
        return this.temperatureRepository.delete(_id);
    }

    public findById (_id: string) : Promise<any> {
        return this.temperatureRepository.findById(_id);
    }

    public search(query: string) : Promise<any> {
        return this.temperatureRepository.search(query);
    }

    public dateRange() : Promise<any> {
        return this.temperatureRepository.dateRange();
    }
}