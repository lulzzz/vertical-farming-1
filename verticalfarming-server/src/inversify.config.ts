import "reflect-metadata";
import {Container} from "inversify";
import {PhController, TemperatureController, SearchController, HumidityController} from './controller';
import {PhService, TemperatureService, SearchService, HumidityService} from "./service";
import {TemperatureRepository, PhRepository, HumidityRepository} from './repository';
import {PhSchema, TemperatureSchema, HumiditySchema} from "./schemas";
import {TYPES} from "./config/constants/types";
import {interfaces, TYPE} from "inversify-express-utils";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';

const container = new Container();
const logger = makeLoggerMiddleware();
container.applyMiddleware(logger);


//bind controllers
container.bind<interfaces.Controller>(TYPE.Controller).to(TemperatureController).whenTargetNamed(TYPES.TemperatureController);
container.bind<interfaces.Controller>(TYPE.Controller).to(PhController).whenTargetNamed(TYPES.PhController);
container.bind<interfaces.Controller>(TYPE.Controller).to(HumidityController).whenTargetNamed(TYPES.HumidityController);
container.bind<interfaces.Controller>(TYPE.Controller).to(SearchController).whenTargetNamed(TYPES.SearchController);

//bind services
container.bind<PhService>(TYPES.PhService).to(PhService);
container.bind<TemperatureService>(TYPES.TemperatureService).to(TemperatureService);
container.bind<SearchService>(TYPES.SearchService).to(SearchService);
container.bind<HumidityService>(TYPES.HumidityService).to(HumidityService);

//bind repositories
container.bind<TemperatureRepository>(TYPES.TemperatureRepository).to(TemperatureRepository);
container.bind<PhRepository>(TYPES.PhRepository).to(PhRepository);
container.bind<HumidityRepository>(TYPES.HumidityRepository).to(HumidityRepository);

//bind schemas
container.bind<PhSchema>(TYPES.PhSchema).to(PhSchema);
container.bind<TemperatureSchema>(TYPES.TemperatureSchema).to(TemperatureSchema);
container.bind<HumiditySchema>(TYPES.HumiditySchema).to(HumiditySchema);
export {container};