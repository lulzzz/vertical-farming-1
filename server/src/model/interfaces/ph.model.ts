/**
 * Created by alexanderlerma on 2/19/17.
 */
import mongoose = require("mongoose");

export interface IPhModel extends mongoose.Document {
    name: string;
    ph: number;
    createdAt?: Date;
    modifiedAt?: Date;
}