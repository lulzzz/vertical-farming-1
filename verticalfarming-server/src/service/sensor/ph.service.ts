/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhService} from "../interfaces/ph.service";
import {injectable, inject} from "inversify";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";

@injectable()
export class PhService implements IPhService {

    private phRepository: PhRepository;

    constructor (@inject(PhRepository) phRepository: PhRepository) {
        this.phRepository = phRepository;
    }

    create (item: ISensor, callback: (error: any, result: any) => void) {
        this.phRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.phRepository.retrieve(callback);
    }

    update (_id: string, item: ISensor, callback: (error: any, result: any) => void) {

        this.phRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this.phRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this.phRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ISensor) => void) {
        this.phRepository.findById(_id, callback);
    }

    search(query: string, callback: (error: any, result: any) => void)  {
        this.phRepository.searchRequest(query, callback);
    }

}