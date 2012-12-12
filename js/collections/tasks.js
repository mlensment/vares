define(['config', 'models/task'], function(Config, Task) {
  return new (Backbone.Collection.extend({
    model: Task,
    url: function(){
      return Config.defaultURL + '/tasks';
    },
    todo: function() {
      return this.scopeByType('TODO');
    },
    inProgress: function() {
      return this.scopeByType('IN_PROGRESS');
    },
    done: function() {
      return this.scopeByType('DONE');
    },
    scopeByType: function(statusCode) {
      return this.filter(function(task) {
        return task.statusCode == statusCode;
      });
    }
  }));
});