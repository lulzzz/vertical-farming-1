import * as dotenv from 'dotenv';
dotenv.config();

class Constants {

    static MONGO_URI: string  = process.env.MONGO_URI;
}

Object.seal(Constants);
console.log("MONGO_URI: " + Constants.MONGO_URI);
export = Constants;
