"use strict";
const DataAccess = require("../DataAccess");
const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
class TemperatureSchema {
    static get schema() {
        return mongoose.Schema({
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
    }
}
let schema = mongooseConnection.model("temperature", TemperatureSchema.schema, "temperature");
module.exports = schema;
