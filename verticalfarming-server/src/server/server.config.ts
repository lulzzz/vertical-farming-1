import * as express from "express";
import * as http from "http";
import {Middleware} from "../config/middleware/middleware.config";
import {injectable, inject} from "inversify";

const io = require('socket.io');


@injectable()
export class Server {
    private _app: any;
    private server: any;
    private io: any;
    private port;
    private middleware: Middleware;

    constructor(@inject(Middleware) middleware: Middleware) {
        this.middleware = middleware;
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
    }

    private createApp(): void {
        this._app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this._app);
    }

    private config() {
        this.port = parseInt(process.env.PORT, 10) || 5000;
        this._app.use(this.middleware.configuration());
        this._app.set("port", this.port);
    }

    private sockets() {
        this.io = io(this.server);
        this._app.set('socketio', this.io);
    }

    public listen() {
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