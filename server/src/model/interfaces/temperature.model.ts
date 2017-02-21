import mongoose = require("mongoose");

export interface ITemperatureModel extends mongoose.Document {
    name: string;
    temperature: number;
    createdAt?: Date;
    modifiedAt?: Date;
}