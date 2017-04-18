"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by alexanderlerma on 4/1/17.
 */
const inversify_config_1 = require("./inversify.config");
const inversify_express_utils_1 = require("inversify-express-utils");
const config_1 = require("./config");
const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
server.setConfig((app) => {
    app.use(config_1.Middleware.configuration());
});
const app = server.build();
exports.app = app;
app.listen(parseInt(process.env.PORT, 10));
