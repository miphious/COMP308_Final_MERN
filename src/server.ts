import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';

import { loadAppConfigurations } from './config/app-config';
import { configureMongoose } from './config/mongoose';
import { configurePassport } from './config/passport';

import { registerAuthRoutes } from './routes/auth.route';
import { registerNurseRoutes } from './routes/nurse.route';
import { registerPatientRoutes } from './routes/patient.route';
import { registerClinicRoutes } from './routes/clinic.route';

import { ApiError } from './models/api-error';

// noinspection JSUnusedGlobalSymbols
export class Server {
    public app: express.Application;

    // noinspection JSUnusedGlobalSymbols
    public static async bootstrap() {
        const server = new Server();

        await server.configureApp();
        await server.registerRoutes();
        server.registerErrorHandler();

        return server;
    }

    constructor() {
        this.app = express();
    }

    private async configureApp() {
        process.env.NODE_ENV = process.env.NODE_ENV || 'development';
        const appConfig = loadAppConfigurations();

        await configureMongoose();
        configurePassport();

        this.app.use(morgan(<any>'dev'));

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());

        this.app.use(cookieParser());

        this.app.use(session({
            secret: appConfig.sessionSecret,
            resave: true,
            saveUninitialized: true
        }));

        this.app.use(passport.initialize());
        this.app.use(passport.session());

        this.app.use(express.static(__dirname + '/public', { dotfiles: 'ignore' }));
    }

    private async registerRoutes() {
        const router = express.Router({
            caseSensitive: false
        });

        registerAuthRoutes(router);
        registerPatientRoutes(router);
        registerNurseRoutes(router);
        registerClinicRoutes(router);

        {
            // respond with 404 for routes matching "/api/*"
            router.get(/^\/api(?:\/.*)?$/i, respondWith404);

            // redirect all 404 GET requests to Angular
            router.get('**', (req, res) => {
                res.sendFile('public/index.html', { root: __dirname });
            });

            // respond all remaining requests with 404
            router.all('**', respondWith404);
        }

        this.app.use(router);
    }

    private registerErrorHandler() {
        this.app.use(respondWith500);
    }
}

function respondWith404(req: Request, res: Response) {
    res.statusCode = 404;
    res.json(new ApiError('Not Found'));
}

function respondWith500(err: any, req: Request, res: Response, next: NextFunction) {
    const errorPayload = new ApiError('Unexpected Error');
    res.statusCode = 500;

    if (err) {
        errorPayload.error = err.message || errorPayload.error;
        res.statusCode = err.status || res.statusCode;
    }

    res.json(errorPayload);
}
