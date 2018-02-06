"use strict";

/**
 * Module dependencies.
 */


const App = require('../app');


const Album = App.Model.extend({

  tableName: 'albums',


  hasTimestamps: true

});

module.exports = App.addModel('Album', Album);
