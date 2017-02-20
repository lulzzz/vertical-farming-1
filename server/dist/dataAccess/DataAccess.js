"use strict";
/**
 * Created by alexanderlerma on 2/15/17.
 */
const Mongoose = require("mongoose");
const Constants = require("../config/constants/Constants");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to MongoDB.");
        });
        this.mongooseInstance = Mongoose.connect(Constants.MONGO_URI);
        return this.mongooseInstance;
    }
}
DataAccess.connect();
module.exports = DataAccess;
