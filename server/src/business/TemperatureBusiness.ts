import TemperatureRepository = require("../repository/TemperatureRepository");
import {ITemperatureBusiness} from "./interfaces/ITemperatureBusiness";
import {ITemperatureModel} from "../model/interfaces/ITemperatureModel";
import TemperatureModel = require("../model/TemperatureModel");


class TemperatureBusiness implements ITemperatureBusiness {
    private _TemperatureRepository: TemperatureRepository;

    constructor () {
        this._TemperatureRepository = new TemperatureRepository();
    }

    create (item: ITemperatureModel, callback: (error: any, result: any) => void) {
        this._TemperatureRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._TemperatureRepository.retrieve(callback);
    }

    update (_id: string, item: ITemperatureModel, callback: (error: any, result: any) => void) {

        this._TemperatureRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._TemperatureRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._TemperatureRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ITemperatureModel) => void) {
        this._TemperatureRepository.findById(_id, callback);
    }

}

Object.seal(TemperatureBusiness);
export = TemperatureBusiness