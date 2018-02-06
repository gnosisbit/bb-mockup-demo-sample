"use strict";

/**
 * Users collection
**/

const App = require('../app');
const Conversation = App.getModel('Conversation');


const Conversations = App.Collection.extend({

  model: Conversation

});


module.exports = App.addCollection('Conversations', Conversations);
