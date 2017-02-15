"use strict";
const dotenv = require("dotenv");
dotenv.config();
class Constants {
}
Constants.MONGO_URI = process.env.MONGO_URI;
Object.seal(Constants);
console.log("MONGO_URI: " + Constants.MONGO_URI);
module.exports = Constants;
