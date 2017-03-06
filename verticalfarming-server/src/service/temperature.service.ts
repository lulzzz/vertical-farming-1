import TemperatureRepository = require("../repository/temperature.repository");
import {ITemperatureService} from "./interfaces/temperature.service";
import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import TemperatureModel = require("../model/temperature.model");
import {SearchRequest} from "../model/searchrequest.model";


class TemperatureService implements ITemperatureService {
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

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void)  {
        this._TemperatureRepository.searchRequest(searchRequest, callback);
    }


}

Object.seal(TemperatureService);
export = TemperatureService