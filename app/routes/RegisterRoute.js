App = require('app');

module.exports = App.RegisterRoute = Ember.Route.extend({
  	 setupController: function(controller, context) {
  	//debugger;
  	console.log(controller.token);
  }
});