"use strict";

/**
 * Blog categories collection
**/

const App = require('../app');
const Route = App.getModel('Route');

const Routes = App.Collection.extend({

  model: Route

});

module.exports = App.addCollection('Routes', Routes);
