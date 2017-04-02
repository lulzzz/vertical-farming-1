/**
 * Created by alexanderlerma on 4/1/17.
 */
import {container} from './config/inversify.config'
import {Server} from "./config/server.config";

const server = container.get<Server>(Server);
server.listen();