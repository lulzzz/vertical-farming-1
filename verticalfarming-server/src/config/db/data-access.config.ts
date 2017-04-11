/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as mongoose from "mongoose";
import {Constants} from "../constants/constants";

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        (<any>mongoose).Promise = global.Promise;
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to MongoDB.");
        });

        this.mongooseInstance = mongoose.connect(Constants.MONGO_URI);
        return this.mongooseInstance;
    }

}

DataAccess.connect();
export = DataAccess;