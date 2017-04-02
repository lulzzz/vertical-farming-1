/**
 * Created by alexanderlerma on 2/14/17.
 */
import {ITemperatureModel} from  "../interfaces/sensor/temperature.model";

//Temperature Model
export class TemperatureModel {

    private _temperatureModel: ITemperatureModel;

    constructor(temperatureModel: ITemperatureModel) {
        this._temperatureModel = temperatureModel;
        this._temperatureModel.type = 'temperature'
    }

    get name() : string {
        return this._temperatureModel.name;
    }

    get data() : number {
        return this._temperatureModel.data;
    }

    get createdAt() : Date {
        return this._temperatureModel.createdAt;
    }

    get modifiedAt() : Date {
        return this._temperatureModel.modifiedAt;
    }
}
