"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by alexanderlerma on 2/15/17.
 */
const express = require("express");
const method_override_config_1 = require("./method-override.config");
const bodyParser = require("body-parser");
const morgan = require('morgan');
class Middleware {
    static allowCrossDomain(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
    ;
    static configuration() {
        const app = express();
        app.use(bodyParser.json());
        app.use(this.allowCrossDomain);
        app.use(morgan('combined'));
        app.use(method_override_config_1.MethodOverride.configuration());
        return app;
    }
}
exports.Middleware = Middleware;
