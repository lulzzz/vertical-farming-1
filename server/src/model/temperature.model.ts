/**
 * Created by alexanderlerma on 2/14/17.
 */
import {ITemperatureModel} from  "./interfaces/temperature.model";

//Temperature Model
class TemperatureModel {

    private _temperatureModel: ITemperatureModel;

    constructor(temperatureModel: ITemperatureModel) {
        this._temperatureModel = temperatureModel;
    }

    get name() : string {
        return this._temperatureModel.name;
    }

    get temperature() : number {
        return this._temperatureModel.temperature;
    }

    get createdAt() : Date {
        return this._temperatureModel.createdAt;
    }

    get modifiedAt() : Date {
        return this._temperatureModel.modifiedAt;
    }
}

Object.seal(TemperatureModel);
export = TemperatureModel;
