/**
 * Created by alexanderlerma on 4/1/17.
 */
import {container} from "./inversify.config";
import {Server} from "./server/server.config";

const server = container.get<Server>(Server);
console.log(server);
server.listen();