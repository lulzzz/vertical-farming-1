"use strict";
const TemperatureRepository = require("../repository/TemperatureRepository");
class TemperatureBusiness {
    constructor() {
        this._TemperatureRepository = new TemperatureRepository();
    }
    create(item, callback) {
        this._TemperatureRepository.create(item, callback);
    }
    retrieve(callback) {
        this._TemperatureRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._TemperatureRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._TemperatureRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._TemperatureRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._TemperatureRepository.findById(_id, callback);
    }
}
Object.seal(TemperatureBusiness);
module.exports = TemperatureBusiness;
