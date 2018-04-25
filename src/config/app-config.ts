export interface AppConfig {
    db: string;
    sessionSecret: string;
}

export function loadAppConfigurations(): AppConfig {
    const config = <AppConfig> require('./env/' + process.env.NODE_ENV + '.js');

    config.db = process.env['APP_MONGO'] || config.db;
    config.sessionSecret = process.env['APP_SESSION_SECRET'] || config.sessionSecret;

    return config;
}
