/**
 * Created by alexanderlerma on 4/1/17.
 */
import {container} from "./inversify.config";
import {InversifyExpressServer} from "inversify-express-utils";
import {Middleware} from "./config";
import {Constants} from "./config/constants/constants";

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(Middleware.configuration());
});

const app = server.build();
app.listen(Constants.PORT);

export {app};