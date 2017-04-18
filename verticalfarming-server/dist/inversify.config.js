"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const controller_1 = require("./controller");
const service_1 = require("./service");
const repository_1 = require("./repository");
const schema_1 = require("./schema");
const config_1 = require("./config");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_logger_middleware_1 = require("inversify-logger-middleware");
const container = new inversify_1.Container();
exports.container = container;
const logger = inversify_logger_middleware_1.makeLoggerMiddleware();
container.applyMiddleware(logger);
//bind controllers
container.bind(inversify_express_utils_1.TYPE.Controller).to(controller_1.TemperatureController).whenTargetNamed(config_1.TYPES.TemperatureController);
container.bind(inversify_express_utils_1.TYPE.Controller).to(controller_1.PhController).whenTargetNamed(config_1.TYPES.PhController);
container.bind(inversify_express_utils_1.TYPE.Controller).to(controller_1.HumidityController).whenTargetNamed(config_1.TYPES.HumidityController);
container.bind(inversify_express_utils_1.TYPE.Controller).to(controller_1.SearchController).whenTargetNamed(config_1.TYPES.SearchController);
//bind services
container.bind(config_1.TYPES.PhService).to(service_1.PhService);
container.bind(config_1.TYPES.TemperatureService).to(service_1.TemperatureService);
container.bind(config_1.TYPES.SearchService).to(service_1.SearchService);
container.bind(config_1.TYPES.HumidityService).to(service_1.HumidityService);
//bind repositories
container.bind(config_1.TYPES.TemperatureRepository).to(repository_1.TemperatureRepository);
container.bind(config_1.TYPES.PhRepository).to(repository_1.PhRepository);
container.bind(config_1.TYPES.HumidityRepository).to(repository_1.HumidityRepository);
//bind schemas
container.bind(config_1.TYPES.PhSchema).to(schema_1.PhSchema);
container.bind(config_1.TYPES.TemperatureSchema).to(schema_1.TemperatureSchema);
container.bind(config_1.TYPES.HumiditySchema).to(schema_1.HumiditySchema);
