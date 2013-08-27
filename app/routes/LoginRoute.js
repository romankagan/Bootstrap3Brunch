App = require('app');

module.exports = App.LoginRoute = Ember.Route.extend({
  setupController: function(controller, context) {
  	//debugger;
  	//console.log(controller.token);
  	controller.reset();
  }
});