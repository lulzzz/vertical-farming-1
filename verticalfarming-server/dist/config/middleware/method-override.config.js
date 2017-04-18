"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const methodOverride = require("method-override");
class MethodOverride {
    static configuration() {
        const app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));
        return app;
    }
}
exports.MethodOverride = MethodOverride;
