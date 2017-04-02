import {IRead} from  '../interfaces/base/read';
import {IWrite} from '../interfaces/base/write';
import {Document, Model, Types} from 'mongoose';
import {SearchRequest} from "../../model/sensor/searchrequest.model";
import {QueryCursor} from "mongoose";
import {ISensor} from "../../model/interfaces/sensor/base/base.sensor";
import {isUndefined} from "util";

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

    streamData(callback:(error: any, result: any) => void) {
        let stream = this._model.find({}).stream();
        stream.on('data', (doc) => {
            callback(undefined, JSON.stringify(doc));
        });
    }

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        if(searchRequest.useFullText) {
            this.fullTextSearchRequest(searchRequest, callback);
            return;
        }

        this._model
            .find({}, callback)
            .where('name').equals(isUndefined(searchRequest.name) ? {} : searchRequest.name)
            .where('room').equals(isUndefined(searchRequest.room) ? {} : searchRequest.room)
            .where('rack').equals(isUndefined(searchRequest.rack) ? {} : searchRequest.rack);

        // this.processStream(cursor, callback);

    }

    private fullTextSearchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        this._model
            .find({$text: {$search: searchRequest.searchString}}, callback);

        // this.processStream(cursor, callback);
    }

    private processStream(cursor: QueryCursor<ISensor>, callback: (error: any, result: any) => void) {
        // for (let doc = cursor.next(); doc != null; doc = cursor.next()) {
        //     callback("err", doc)
        // }
        //
        // // cursor.on('data', (doc, error) => {
        // //     callback(error, doc);
        // // });
        // //
        // //
        // //
        // // cursor.on('close', (error) => {
        // //     if (error) throw error;
        // //     console.log('cursor closed!')
        // // });
    }

    private toObjectId (_id: string) : Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id)
    }
}