import DataAccess = require("../config/db/data-access");
import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class TemperatureSchema {

    static get schema() {

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

        schema.index({name :'text', room: 'text', rack: 'text'});
        return schema;
    }
}

let schema = mongooseConnection.model<ITemperatureModel>("temperature", TemperatureSchema.schema, "temperature");
export = schema;





