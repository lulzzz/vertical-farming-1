"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const mongo_config_1 = require("../../config/db/mongo.config");
let TemperatureSchema = class TemperatureSchema {
    mongooseModel() {
        return mongo_config_1.MongoConfig.getConnection().model("temperature", this.schema(), "temperature");
    }
    schema() {
        const schema = mongo_config_1.MongoConfig.getMongooseInstance().Schema({
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
        schema.index({ name: 'text', room: 'text', rack: 'text', type: 'text' });
        return schema;
    }
};
TemperatureSchema = __decorate([
    inversify_1.injectable()
], TemperatureSchema);
exports.TemperatureSchema = TemperatureSchema;
