"use strict";

/**
 * Users collection
**/

const App = require('../app');
const Message = App.getModel('Message');


const Messages = App.Collection.extend({

  model: Message,


  limit: 10,


  base: '/admin/messages'

});


module.exports = App.addCollection('Messages', Messages);
