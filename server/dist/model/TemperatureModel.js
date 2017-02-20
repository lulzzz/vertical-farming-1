"use strict";
//Temperature Model
class TemperatureModel {
    constructor(temperatureModel) {
        this._temperatureModel = temperatureModel;
    }
    get name() {
        return this._temperatureModel.name;
    }
    get temperature() {
        return this._temperatureModel.temperature;
    }
    get createdAt() {
        return this._temperatureModel.createdAt;
    }
    get modifiedAt() {
        return this._temperatureModel.modifiedAt;
    }
}
Object.seal(TemperatureModel);
module.exports = TemperatureModel;
