import DataAccess = require("../../config/db/data-access.config");
import {injectable} from "inversify";
import {BaseSchema} from "./interfaces/base.schema";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

@injectable()
export class TemperatureSchema implements BaseSchema {

    public mongooseModel() {
        return mongooseConnection.model<ISensor>("temperature", this.schema(), "temperature");
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
            this.type = 'temperature';
            next();
            return this;
        });

        schema.index({name :'text', room: 'text', rack: 'text', type: 'text'});
        return schema;
    }
}




