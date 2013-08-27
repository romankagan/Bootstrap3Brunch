var App;

// ===== Namespace =====
App = require('app');

// ===== Router =====
App.Router.map(function() {
	this.route('articles');
	this.route('photos');
	this.route('login');
	this.route('register');
});

// ===== Routes =====
require('routes/AuthenticatedRoute');
require('routes/LoginRoute');
require('routes/PhotosRoute');
require('routes/ArticlesRoute');
// require('routes/RegisterRoute');


// ===== Store =====
App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});

// ===== Models =====

// ===== Views =====

// ===== Controllers =====
require('controllers/ApplicationController');
require('controllers/LoginController');
require('controllers/RegisterController');
	//require('controllers/IndexController');
// ===== Template Helpers =====

// ===== Templates =====
//require('templates/_loginPartial');
require('templates/register');
require('templates/application');
require('templates/index');
require('templates/login');
require('templates/articles');
require('templates/photos');
// require('templates/tables');
// require('templates/_tableMenu');
// require('templates/table');

