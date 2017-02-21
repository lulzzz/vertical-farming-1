/**
 * Created by alexanderlerma on 2/19/17.
 */
import pHRepository = require("../repository/ph.repository");
import {IPhService} from "./interfaces/ph.service";
import {IPhModel} from "../model/interfaces/ph.model";
import pHModel = require("../model/ph.model");


class PhService implements IPhService {
    private _pHRepository: pHRepository;

    constructor () {
        this._pHRepository = new pHRepository();
    }

    create (item: IPhModel, callback: (error: any, result: any) => void) {
        this._pHRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._pHRepository.retrieve(callback);
    }

    update (_id: string, item: IPhModel, callback: (error: any, result: any) => void) {

        this._pHRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._pHRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._pHRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPhModel) => void) {
        this._pHRepository.findById(_id, callback);
    }

}

Object.seal(PhService);
export = PhService