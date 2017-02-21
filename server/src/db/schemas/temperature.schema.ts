import DataAccess = require("../data-access");
import {ITemperatureModel} from "../../model/interfaces/sensor/temperature.model";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class TemperatureSchema {

    static get schema() {

        let schema =  mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            temperature: {
                type: Number,
                required: true
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
            next();
            return this;
        });


        return schema;
    }
}

let schema = mongooseConnection.model<ITemperatureModel>("temperature", TemperatureSchema.schema, "temperature");
export = schema;





