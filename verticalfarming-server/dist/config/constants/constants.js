"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
}
Constants.MONGO_URI = process.env.MONGO_URI;
Constants.PORT = parseInt(process.env.PORT, 10);
exports.Constants = Constants;
