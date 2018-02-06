"use strict";

/**
 * Blog categories collection
**/

const App = require('../app');
const LinkModel = App.getModel('Link');

const Links = App.Collection.extend({

  model: LinkModel

});

module.exports = App.addCollection('Links', Links);
