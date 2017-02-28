/**
 * Created by alexanderlerma on 2/19/17.
 */
import DataAccess = require("../data-access");
import {IPhModel} from "../../model/interfaces/sensor/ph.model";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class PhSchema {

    static get schema() {

        let schema = mongoose.Schema({
            name: {
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

        return schema;
    }
}

let schema =  mongooseConnection.model<IPhModel>("ph", PhSchema.schema, "ph");
export = schema;





