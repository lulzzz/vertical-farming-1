/**
 * Created by alexanderlerma on 4/2/17.
 */
import {ISensor} from "../interfaces/sensor/base.sensor";
import {injectable} from "inversify";

@injectable()
export class Sensor {
    private _sensorModel: ISensor;

    constructor(sensorModel: ISensor) {
        this._sensorModel = sensorModel;
    }

    get name(): string {
        return this._sensorModel.name;
    }

    get room(): string {
        return this._sensorModel.room;
    }

    get rack(): string {
        return this._sensorModel.rack;
    }

    get type(): string {
        return this._sensorModel.type;
    }

    get data(): number {
        return this._sensorModel.data;
    }

    get createdAt(): Date {
        return this._sensorModel.createdAt;
    }

    get modifiedAt(): Date {
        return this._sensorModel.modifiedAt;
    }
}