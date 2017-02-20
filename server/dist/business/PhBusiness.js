"use strict";
/**
 * Created by alexanderlerma on 2/19/17.
 */
const pHRepository = require("../repository/PhRepository");
class pHBusiness {
    constructor() {
        this._pHRepository = new pHRepository();
    }
    create(item, callback) {
        this._pHRepository.create(item, callback);
    }
    retrieve(callback) {
        this._pHRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._pHRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._pHRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._pHRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._pHRepository.findById(_id, callback);
    }
}
Object.seal(pHBusiness);
module.exports = pHBusiness;
