/**
 * Created by alexanderlerma on 2/15/17.
 */
import * as mongoose from "mongoose";
import {Constants} from "../constants/constants";

export class MongoConfig {
    private static isConnected: boolean = false;
    private static mongooseInstance: any;
    private static mongooseConnection: mongoose.Connection;


    public static getConnection() {
        if(this.isConnected)
            return this.mongooseConnection;

        this.connect();
        return this.mongooseConnection;

    }


    public static getMongooseInstance() {
        if(this.isConnected)
            return this.mongooseInstance;

        this.connect();
        return this.mongooseInstance;
    }

    private static connect (): void {
        if(this.mongooseInstance) return;

        (<any>mongoose).Promise = global.Promise;
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to MongoDB.");
        });

        this.mongooseInstance = mongoose.connect(Constants.MONGO_URI);
        this.isConnected = true;
    }
}