/**
 * Created by alexanderlerma on 2/15/17.
 */
import Mongoose = require("mongoose");
import {Constants} from "../constants/constants";

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to MongoDB.");
        });

        this.mongooseInstance = Mongoose.connect(Constants.MONGO_URI);
        return this.mongooseInstance;
    }

}

DataAccess.connect();
export = DataAccess;