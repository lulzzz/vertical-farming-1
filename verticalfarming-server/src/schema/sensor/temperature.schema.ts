import {injectable} from "inversify";
import {ISchema} from "../interfaces/base.schema";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {MongoConfig} from "../../config/db/mongo.config";

@injectable()
export class TemperatureSchema implements ISchema {

    public mongooseModel() {
        return MongoConfig.getConnection().model<ISensor>("temperature", this.schema(), "temperature");
    }

    private schema() {
        const schema = MongoConfig.getMongooseInstance().Schema({
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




