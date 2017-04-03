/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhService} from "../interfaces/ph.service";
import {IPhModel} from "../../model/interfaces/sensor/ph.model";
import PhModel = require("../../model/sensor/ph.model");
import {injectable} from "inversify";
import {PhRepository} from "../../repository/ph.repository";

@injectable()
export class PhService implements IPhService {

    constructor (private _PhRepository: PhRepository) {}

    create (item: IPhModel, callback: (error: any, result: any) => void) {
        this._PhRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._PhRepository.retrieve(callback);
    }

    update (_id: string, item: IPhModel, callback: (error: any, result: any) => void) {

        this._PhRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._PhRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._PhRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPhModel) => void) {
        this._PhRepository.findById(_id, callback);
    }

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void)  {
        this._PhRepository.searchRequest(searchRequest, callback);
    }

}