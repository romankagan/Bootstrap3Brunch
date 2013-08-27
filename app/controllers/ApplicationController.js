var App;

App = require('app');

module.exports = App.ApplicationController = Ember.ObjectController.extend({
	needs: 'login',
	isLoggedIn: localStorage.token,
	logout: function(){
		this.set("isLoggedIn", false);
		this.set("controllers.login.token", "");
		this.transitionToRoute('login');
	}
});