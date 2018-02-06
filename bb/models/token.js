"use strict";

/**
 * Module dependencies.
 */


const App = require('../app');


const Token = App.Model.extend({

  tableName: 'tokens',


  /*
   * delete post
  **/
  remove: function(id) {
    return Token.forge({id: id})
    .fetch()
    .then(function(model) {
      return model.destroy();
    });
  }


});


module.exports = App.addModel('Token', Token);
