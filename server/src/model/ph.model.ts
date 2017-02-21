/**
 * Created by alexanderlerma on 2/14/17.
 */
import {IPhModel} from  "./interfaces/ph.model";

//Ph Model
class PhModel {

    private _phModel: IPhModel;

    constructor(phModel: IPhModel) {
        this._phModel = phModel;
    }

    get name() : string {
        return this._phModel.name;
    }

    get ph() : number {
        return this._phModel.ph;
    }

    get createdAt() : Date {
        return this._phModel.createdAt;
    }

    get modifiedAt() : Date {
        return this._phModel.modifiedAt;
    }
}

Object.seal(PhModel);
export = PhModel;
