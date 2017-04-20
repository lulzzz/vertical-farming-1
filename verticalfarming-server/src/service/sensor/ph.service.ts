/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhService} from "../interfaces/ph.service";
import {injectable, inject} from "inversify";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";

@injectable()
export class PhService implements IPhService {

    constructor (@inject(TYPES.PhRepository) private phRepository: PhRepository) {}

    public create (item: ISensor) : Promise<any>{
        return this.phRepository.create(item);
    }

    public retrieve (): Promise<any> {
        return this.phRepository.retrieve();
    }

    public update (_id: string, item: ISensor): Promise<any> {

        return this.phRepository.findById(_id);
    }

    public delete (_id: string): Promise<any> {
        return this.phRepository.delete(_id);
    }

    public findById (_id: string): Promise<any> {
        return this.phRepository.findById(_id);
    }

    public search(query: string): Promise<any>  {
        return this.phRepository.search(query);
    }

    public dateRange() : Promise<any>{
        return this.phRepository.dateRange();
    }


}