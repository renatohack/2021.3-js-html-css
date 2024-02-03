const { Router } = require('express');

const AuthMidleware = require('./app/Midlewares/AuthMidleware');
const LoginController = require('./app/Controllers/LoginController');
const UserController = require('./app/Controllers/UserController');
const EventsController = require('./app/Controllers/EventsController');

const routes = new Router();

routes.post("/user", UserController.create);
routes.get("/user", UserController.list);

routes.post("/events", EventsController.create);
routes.get("/events", EventsController.list);

routes.post("/login", LoginController.index);

module.exports = routes;