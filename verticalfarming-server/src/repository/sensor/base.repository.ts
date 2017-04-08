import {IRead} from "../interfaces/base/read";
import {IWrite} from "../interfaces/base/write";
import {Document, Model, Types} from "mongoose";

export class BaseRepository<T extends Document> implements IRead<T>, IWrite<T> {

    protected _model: Model<Document>;

    constructor (schemaModel: Model<Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._model.find({}, callback)
    }

    update (_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, item, callback);

    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));
    }

    findById (_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    findByName(name: string, callback: (error: any, result: T) => void) {
        this._model.find({name: name}, 'name', callback);
    }

    findByRoom(room: string, callback: (error: any, result: T) => void) {
        this._model.find({room: room}, 'room', callback);

    }

    findByRack(rack: string, callback: (error: any, result: T) => void) {
        this._model.find({rack: rack}, 'rack', callback);
    }


    search(query: string, callback: (error: any, result: any) => void) {
        this._model.find({$text: {$search: query}}, callback);
    }

    private toObjectId (_id: string) : Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id)
    }
}