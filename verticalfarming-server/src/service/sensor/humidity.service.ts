/**
 * Created by alexanderlerma on 2/19/17.
 */
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {IHumidityService} from "../interfaces/humidity.service";
import {HumidityRepository} from "../../repository/sensor/humidity.repository";

@injectable()
export class HumidityService implements IHumidityService {

    constructor (@inject(TYPES.HumidityRepository) private humidityRepository: HumidityRepository) {}

    public create (item: ISensor) : Promise<any>{
        return this.humidityRepository.create(item);
    }

    public retrieve () : Promise<any>{
        return this.humidityRepository.retrieve();
    }

    public update (_id: string, item: ISensor) : Promise<any>{

        return this.humidityRepository.findById(_id);
    }

    public delete (_id: string) : Promise<any>{
        return this.humidityRepository.delete(_id);
    }

    public findById (_id: string): Promise<any> {
        return this.humidityRepository.findById(_id);
    }

    public search(query: string) : Promise<any> {
        return this.humidityRepository.search(query);
    }

    public dateRange() : Promise<any>{
        return this.humidityRepository.dateRange();
    }

}