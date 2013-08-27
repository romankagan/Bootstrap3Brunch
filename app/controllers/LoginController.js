var App;

App = require('app');

module.exports = App.LoginController = Ember.ObjectController.extend({
	username: "",
	password: "",
	errorMessage: "",
	attemptedTransition:"",
	needs: ["application", "register"],

	reset: function() {
		this.setProperties({
			username: "",
			password: "",
			errorMessage: ""
		});
	},

	token: localStorage.token || "",

	tokenChanged: function() {
		localStorage.token = this.get('token');
	}.observes('token'),

	login: function() {

		var self = this,
			data = this.getProperties('username', 'password');

		// Clear out any error messages.
		this.set('errorMessage', null);

		$.post('http://localhost:3000/auth.json', data).then(function(response) {

			self.set('errorMessage', response.message);
			if (response.success) {
				alert('Login succeeded!');
				self.set('token', response.token);
				self.set('controllers.application.isLoggedIn', true);
				var attemptedTransition = self.get('attemptedTransition');
				if (attemptedTransition) {
					attemptedTransition.retry();
					self.set('attemptedTransition', null);
				} else {
					// Redirect to 'articles' by default.
					self.transitionToRoute('articles');
				}
			}
		});
	}
});