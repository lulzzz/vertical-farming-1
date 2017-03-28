/**
 * Created by alexanderlerma on 2/14/17.
 */
import {IPhModel} from  "./interfaces/sensor/ph.model";

//Ph Model
export class PhModel {

    private _phModel: IPhModel;

    constructor(phModel: IPhModel) {
        this._phModel = phModel;
        this._phModel.type = 'ph';
    }

    get name() : string {
        return this._phModel.name;
    }

    get data() : number {
        return this._phModel.data;
    }

    get createdAt() : Date {
        return this._phModel.createdAt;
    }

    get modifiedAt() : Date {
        return this._phModel.modifiedAt;
    }
}