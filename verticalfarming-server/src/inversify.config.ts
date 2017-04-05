import "reflect-metadata";
import {Container} from "inversify";
import {PhService, SearchService, TemperatureService} from "./service";
import {PhRepository} from "./repository/sensor/ph.repository";
import {TemperatureRepository} from "./repository/sensor/temperature.repository";
import {MainRouter} from "./routes/main.router";
import {PhRouter} from "./routes/ph.router";
import {TemperatureRouter} from "./routes/temperature.router";
import {SearchRouter} from "./routes/search.router";
import {Server} from "./server/server.config";
import {Middleware} from "./config/middleware/middleware.config";
import {TemperatureController} from "./controller/temperature.controller";
import {PhController} from "./controller/ph.controller";
import {SearchController} from "./controller/search.controller";
import {PhSchema} from "./schemas/sensor/ph.schema";
import {TemperatureSchema} from "./schemas/sensor/temperature.schema";

const container = new Container();

//bind controllers
container.bind<TemperatureController>(TemperatureController).toSelf().inSingletonScope();
container.bind<PhController>(PhController).toSelf().inSingletonScope();
container.bind<SearchController>(SearchController).toSelf().inSingletonScope();

//bind services
container.bind<PhService>(PhService).toSelf().inSingletonScope();
container.bind<TemperatureService>(TemperatureService).toSelf().inSingletonScope();
container.bind<SearchService>(SearchService).toSelf().inSingletonScope();

//bind routers
container.bind<MainRouter>(MainRouter).toSelf().inSingletonScope();
container.bind<PhRouter>(PhRouter).toSelf().inSingletonScope();
container.bind<TemperatureRouter>(TemperatureRouter).toSelf().inSingletonScope();
container.bind<SearchRouter>(SearchRouter).toSelf().inSingletonScope();
//bind repositories
// container.bind<BaseRepository<ISensor>>("BaseRepository<ISensor>")
//     .to(TemperatureRepository).whenInjectedInto(TemperatureService);
// container.bind<BaseRepository<ISensor>>("BaseRepository<ISensor>")
//     .to(PhRepository).whenInjectedInto(PhService);

container.bind<TemperatureRepository>(TemperatureRepository).toSelf().inSingletonScope();
container.bind<PhRepository>(PhRepository).toSelf().inSingletonScope();

//bind schemas
container.bind<PhSchema>(PhSchema).toSelf().inSingletonScope();
container.bind<TemperatureSchema>(TemperatureSchema).toSelf().inSingletonScope();

//bind middleware
container.bind<Middleware>(Middleware).toSelf().inSingletonScope();

//bind server
container.bind<Server>(Server).toSelf().inSingletonScope();

console.log(container);
export {container};