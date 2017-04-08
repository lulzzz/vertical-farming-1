///<reference path="controller/sensor/temperature.controller.ts"/>
import "reflect-metadata";
import {Container} from "inversify";
import {PhController, TemperatureController, SearchController} from './controller';
import {PhService, TemperatureService, SearchService} from "./service";
import {TemperatureRepository, PhRepository} from './repository';
import {PhSchema, TemperatureSchema} from "./schemas";
import {TYPES} from "./config/constants/types";
import {interfaces, TYPE} from "inversify-express-utils";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';

const container = new Container();
const logger = makeLoggerMiddleware();
container.applyMiddleware(logger);


//bind controllers
container.bind<interfaces.Controller>(TYPE.Controller).to(TemperatureController).whenTargetNamed(TYPES.TemperatureController);
container.bind<interfaces.Controller>(TYPE.Controller).to(PhController).whenTargetNamed(TYPES.PhController);
container.bind<interfaces.Controller>(TYPE.Controller).to(SearchController).whenTargetNamed(TYPES.SearchController);

//bind services
container.bind<PhService>(TYPES.PhService).to(PhService);
container.bind<TemperatureService>(TYPES.TemperatureService).to(TemperatureService);
container.bind<SearchService>(TYPES.SearchService).to(SearchService);

//bind repositories
container.bind<TemperatureRepository>(TYPES.TemperatureRepository).to(TemperatureRepository);
container.bind<PhRepository>(TYPES.PhRepository).to(PhRepository);

//bind schemas
container.bind<PhSchema>(TYPES.PhSchema).to(PhSchema);
container.bind<TemperatureSchema>(TYPES.TemperatureSchema).to(TemperatureSchema);
export {container};