"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class BaseRepository {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item) {
        return this._model.create(item);
    }
    retrieve() {
        return this._model.find({}).exec();
    }
    update(_id, item) {
        return this._model.update({ _id: _id }, item).exec();
    }
    delete(_id) {
        return this._model.remove({ _id: this.toObjectId(_id) }).exec();
    }
    findById(_id) {
        return this._model.findById(_id).exec();
    }
    findByName(name) {
        return this._model.find({ name: name }, 'name').exec();
    }
    findByRoom(room) {
        return this._model.find({ room: room }, '_room').exec();
    }
    findByRack(rack) {
        return this._model.find({ rack: rack }, 'rack').exec();
    }
    dateRange() {
        return this._model.aggregate({
            $project: {
                min: { $min: '$createdAt' },
                max: { $max: '$createdAt' }
            }
        }).exec();
    }
    search(query, start, end) {
        const regexSearch = { $or: [
                { name: { $regex: query, $options: 'i' } },
                { room: { $regex: query, $options: 'i' } },
                { rack: { $regex: query, $options: 'i' } },
                { type: { $regex: query, $options: 'i' } }
            ]
        };
        console.log(regexSearch);
        if (start && end) {
            return this._model
                .find({ $and: [
                    { createdAt: { $gte: start } },
                    { createdAt: { $lte: end } },
                    regexSearch
                ] })
                .exec();
        }
        return this._model
            .find(regexSearch)
            .exec();
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.BaseRepository = BaseRepository;
