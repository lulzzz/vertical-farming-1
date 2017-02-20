"use strict";
//Ph Model
class PhModel {
    constructor(phModel) {
        this._phModel = phModel;
    }
    get name() {
        return this._phModel.name;
    }
    get ph() {
        return this._phModel.ph;
    }
    get createdAt() {
        return this._phModel.createdAt;
    }
    get modifiedAt() {
        return this._phModel.modifiedAt;
    }
}
Object.seal(PhModel);
module.exports = PhModel;
