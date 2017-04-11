import {IRead} from "../interfaces/base/read";
import {IWrite} from "../interfaces/base/write";
import * as mongoose from "mongoose";

export class BaseRepository<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    protected _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    public create (item: T) : Promise<any> {
        return this._model.create(item);
    }

    public retrieve () : Promise<any> {
        return this._model.find({}).exec();
    }

    public update (_id: mongoose.Types.ObjectId, item: T) : Promise<any> {
        return this._model.update({_id: _id}, item).exec();

    }

    public delete (_id: string) : Promise<any> {
        return this._model.remove({_id: this.toObjectId(_id)}).exec();
    }

    public findById (_id: string) : Promise<any> {
        return this._model.findById(_id).exec();
    }

    public findByName(name: string): Promise<any> {
        return this._model.find({name: name}, 'name').exec();
    }

    public findByRoom(room: string): Promise<any> {
        return this._model.find({room: room}, 'room').exec();

    }

    public findByRack(rack: string): Promise<any> {
        return this._model.find({rack: rack}, 'rack').exec();
    }


    public search(query: string) : Promise<any> {
        return this._model.find({$text: {$search: query}}).exec();
    }

    private toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}