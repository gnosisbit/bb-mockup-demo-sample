"use strict";

const App = require('../app');
const EventsController = App.getController('Events');
const auth = require('../lib/auth');


App.get('/admin/events', auth.isAuthenticated, EventsController.getAdmin);
App.get('/events/new', auth.isAuthenticated, EventsController.getNew);
App.post('/events/new', auth.isAuthenticated, EventsController.postNew);
App.get('/events/edit/:id', auth.isAuthenticated, EventsController.getEdit);
App.get('/events/delete/:id', auth.isAuthenticated, EventsController.getDelete);
App.post('/events/edit', auth.isAuthenticated, EventsController.postEdit);

// public
App.get('/events', EventsController.getEvents);
App.get('/events/city/:city', EventsController.getEventsByCity);
App.get('/events/:slug', EventsController.getEvent);
