"use strict";
const dotenv = require("dotenv");
dotenv.config();
class Constants {
}
Constants.MONGO_URI = process.env.MONGO_URI;
Object.seal(Constants);
module.exports = Constants;
