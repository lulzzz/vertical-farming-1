/**
 * Created by alexanderlerma on 2/21/17.
 */
import mongoose = require("mongoose");

export interface ISensor extends mongoose.Document {
    name: string;
    room: string;
    rack: string;
    createdAt?: Date;
    modifiedAt?: Date;
}
