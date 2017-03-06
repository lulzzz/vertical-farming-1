/**
 * Created by alexanderlerma on 2/19/17.
 */
import PhRepository = require("../repository/ph.repository");
import {IPhService} from "./interfaces/ph.service";
import {IPhModel} from "../model/interfaces/sensor/ph.model";
import PhModel = require("../model/ph.model");
import {SearchRequest} from "../model/searchrequest.model";


class PhService implements IPhService {
    private _PhRepository: PhRepository;

    constructor () {
        this._PhRepository = new PhRepository();
    }

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

Object.seal(PhService);
export = PhService