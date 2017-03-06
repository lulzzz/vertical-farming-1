import express = require("express");
const methodOverride = require("method-override");

export class MethodOverride {

    static configuration () : any {
        let app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));
        return app;
    }
}