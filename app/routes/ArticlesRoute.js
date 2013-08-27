App = require('app');

module.exports = App.ArticlesRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return this.getJSONWithToken('http://localhost:3000/articles.json');
  }
});