"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by alexanderlerma on 2/15/17.
 */
const mongoose = require("mongoose");
const constants_1 = require("../constants/constants");
class MongoConfig {
    static getConnection() {
        if (this.isConnected)
            return this.mongooseConnection;
        this.connect();
        return this.mongooseConnection;
    }
    static getMongooseInstance() {
        if (this.isConnected)
            return this.mongooseInstance;
        this.connect();
        return this.mongooseInstance;
    }
    static connect() {
        if (this.mongooseInstance)
            return;
        mongoose.Promise = global.Promise;
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to MongoDB.");
        });
        this.mongooseInstance = mongoose.connect(constants_1.Constants.MONGO_URI);
        this.isConnected = true;
    }
}
MongoConfig.isConnected = false;
exports.MongoConfig = MongoConfig;
