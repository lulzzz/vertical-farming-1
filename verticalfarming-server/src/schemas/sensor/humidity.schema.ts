import DataAccess = require("../../config/db/data-access.config");
import {injectable} from "inversify";
import {BaseSchema} from "../interfaces/base.schema";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
/**
 * Created by alexanderlerma on 2/19/17.
 */


const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

@injectable()
export class HumiditySchema implements BaseSchema {

    public mongooseModel() {
        return mongooseConnection.model<ISensor>("humidity", this.schema(), "humidity");
    }

    private schema() {
        const schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            data: {
                type: Number,
                required: true
            },
            room: {
                type: String,
                required: true
            },
            rack: {
                type: String,
                required: true
            },

            type: {
                type: String,
                required: false
            },
            createdAt: {
                type: Date,
                required: false
            },
            modifiedAt: {
                type: Date,
                required: false
            }
        }).pre('save', function (next) {
            let now = new Date();
            if (!this.createdAt) {
                this.createdAt = now;
            }
            this.modifiedAt = now;
            this.type = 'humidity';
            next();
            return this;
        });

        schema.index({name :'text', room: 'text', rack: 'text', type: 'text'});
        return schema;
    }
}