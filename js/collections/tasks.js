define(['models/task'], function(Task) {
  return new (Backbone.Collection.extend({
    model: Task
  }));
});