"use strict";

const App = require('../app');
const TagsController = App.getController('Tags');


App.get('/blog/tags/:slug', TagsController.getPosts);
