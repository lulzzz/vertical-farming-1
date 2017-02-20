import * as dotenv from 'dotenv';
dotenv.config();

class Constants {

    static MONGO_URI: string  = process.env.MONGO_URI;
}

Object.seal(Constants);
export = Constants;
