define(['config', 'models/user'], function(Config, User) {
  return new (Backbone.Collection.extend({
    model: User,
    url: function(){
        return Config.defaultURL + '/users';
    }
  }));
});