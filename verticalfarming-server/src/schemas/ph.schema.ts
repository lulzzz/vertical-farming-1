import DataAccess = require("../config/db/data-access");
import {IPhModel} from "../model/interfaces/sensor/ph.model";
/**
 * Created by alexanderlerma on 2/19/17.
 */


const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class PhSchema {

    static get schema() {

        const schema = mongoose.Schema({
            name: {
                type: String,
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
            ph: {
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

        schema.index({name :'text', room: 'text', rack: 'text'});
        return schema;
    }
}

let schema =  mongooseConnection.model<IPhModel>("ph", PhSchema.schema, "ph");
export = schema;





