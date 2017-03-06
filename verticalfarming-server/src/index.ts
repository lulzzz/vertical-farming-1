import * as express from "express";
import * as http from "http";
import {MiddlewaresBase} from "./config/middleware/base/middleware.base";
const io = require('socket.io');

class Server {
    private _app: any;
    private server: any;
    private io: any;
    private port;

    public static bootstrap() {
        return new Server();
    }

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this._app = express();

    }

    private createServer(): void {
        this.server = http.createServer(this._app);
    }

    private config() {
        this.port = parseInt(process.env.PORT, 10) || 5000;
        this._app.use(MiddlewaresBase.configuration);
        this._app.set("port", this.port);
    }

    private sockets() {
        this.io = io(this.server);
    }

    private listen() {
        this._app.listen(this.port, () => {
            console.log("Vertical Farming app running on port: " + this.port);
        });

        this.io.on('connect', (socket) => {
            console.log('a user connected on port: %s', this.port);

            socket.on('disconnect', () => {
                console.log('user disconnected');
            })
        });

    }

    public get app(): any {
        return this._app;
    }
}

let server = Server.bootstrap();
export = server;