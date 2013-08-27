App = require('app');

module.exports = App.PhotosRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return this.getJSONWithToken('http://localhost:3000/photos.json');
  }
});