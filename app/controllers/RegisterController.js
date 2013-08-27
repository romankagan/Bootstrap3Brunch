var App;

App = require('app');

module.exports = App.RegisterController = Ember.ObjectController.extend({
	firstName: "",
	lastName: "",
	email: "",
	username: "", 
	password: "",
	confirmPassword: "",
	attemptedTransition:"",

	token: localStorage.token || "",

	register: function() {
		console.log("RegisterController");
		var self = this,
			data = this.getProperties('firstName', 'lastName', 'email', 'username', 'password');
			console.log(data);
	}
});