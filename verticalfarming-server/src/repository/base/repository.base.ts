import {IRead} from  '../interfaces/base/read';
import {IWrite} from '../interfaces/base/write';
import {Document, Model, Types} from 'mongoose';
import {SearchRequest} from "../../model/searchrequest.model";
import {QueryCursor} from "mongoose";
import {ISensor} from "../../model/interfaces/sensor/base/base.sensor";

export class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {

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
        this._model.find({room: name}, 'room', callback);

    }

    findByRack(rack: string, callback: (error: any, result: T) => void) {
        this._model.find({rack: name}, 'rack', callback);
    }

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        if(searchRequest.useFullText) {
            this.fullTextSearchRequest(searchRequest, callback);
            return;
        }

        const cursor = this._model
            .find({})
            .where('name').equals(searchRequest.name? searchRequest.name : {})
            .where('room').equals(searchRequest.room? searchRequest.room : {})
            .where('rack').equals(searchRequest.rack? searchRequest.rack : {})
            .cursor();

        this.processStream(cursor, callback);

    }

    private fullTextSearchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        const cursor = this._model
            .find({$text: {$search: searchRequest.searchString}})
            .cursor();

        this.processStream(cursor, callback);
    }

    private processStream(cursor: QueryCursor<ISensor>, callback: (error: any, result: any) => void) {
        cursor.on('data', (doc, error) => {
            callback(error, doc);
        });

        cursor.on('close', (error) => {
            if (error) throw error;
            console.log('cursor closed!')
        });
    }

    private toObjectId (_id: string) : Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id)
    }
}