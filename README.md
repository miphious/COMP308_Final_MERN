# COMP 308 Project

Patient/Nurse Interaction CRUD website.

## Development
### Mongo DB

Run Mongo DB. Express app connects to `comp308-project` database [by default](./src/config/env/development.ts).

If you use Docker, you can run the following container:

```bash
docker run --detach --publish 27017:27017 --name mongo-comp308 mongo
```

### Express Web Server

Express app listens on port `3001`.

```bash
npm install
npm start
```

### React App

React apps usually listens on port `3000`.
```bash
npm install
npm start
```
Created using create-react-app

## Configurations

Mongo Db connection string could be set in [config files](./src/config/env) or as `APP_MONGO` environment variable.

> If an app configuration is available both in a file and as environment variable, environment variable wins.

### Heroku

App is ready to be deployed on [Heroku](https://www.heroku.com). Add the following environment variables in application settings:

- `NPM_CONFIG_PRODUCTION` : `false`
- `APP_MONGO` : `mongodb://<dbuser>:<dbpassword>@abc.mlab.com:51799/foo-db`
- `APP_SESSION_SECRET` : `secret`
