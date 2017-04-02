/**
 * Created by alexanderlerma on 3/29/17.
 */
import { Container } from 'inversify';
import "reflect-metadata";

import {PhService, SearchService, TemperatureService} from '../service';
import {PhRepository} from "../repository/ph.repository";
import {TemperatureRepository} from "../repository/temperature.repository";
import {BaseRouter} from "../routes/base/base.router";
import {PhRouter} from "../routes/ph.router";
import {TemperatureRouter} from "../routes/temperature.router";
import {SearchRouter} from "../routes/search.router";
import {Server} from "./server.config";
import {MiddlewaresBase} from "./middleware/base/middleware.base";
import {TemperatureController} from "../controller/temperature.controller";
import {PhController} from "../controller/ph.controller";
import {SearchController} from "../controller/search.controller";
import {PhSchema} from "../schemas/sensor/ph.schema";
import {TemperatureSchema} from "../schemas/sensor/temperature.schema";

let container = new Container();

//bind repositories
container.bind<TemperatureRepository>(TemperatureRepository).toSelf();
container.bind<PhRepository>(PhRepository).toSelf();

//bind schemas
container.bind<PhSchema>(PhSchema).toSelf();
container.bind<TemperatureSchema>(TemperatureSchema).toSelf();

//bind services
container.bind<PhService>(PhService).toSelf();
container.bind<TemperatureService>(TemperatureService).toSelf();
container.bind<SearchService>(SearchService).toSelf();

//bind controllers
container.bind<TemperatureController>(TemperatureController).toSelf();
container.bind<PhController>(PhController).toSelf();
container.bind<SearchController>(SearchController).toSelf();

//bind routers
container.bind<BaseRouter>(BaseRouter).toSelf();
container.bind<PhRouter>(PhRouter).toSelf();
container.bind<TemperatureRouter>(TemperatureRouter).toSelf();
container.bind<SearchRouter>(SearchRouter).toSelf();

//bind middleware
container.bind<MiddlewaresBase>(MiddlewaresBase).toSelf();

//bind server
container.bind<Server>(Server).toSelf();

console.log(container);
export {container};