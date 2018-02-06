"use strict";

/**
 * Meetups collection
 */

const App = require('../app');
const Meetup = App.getModel('Meetup');



const Meetups = App.Collection.extend({

  model: Meetup,

  base: '/meetups'

});


module.exports = App.addCollection('Meetups', Meetups);
