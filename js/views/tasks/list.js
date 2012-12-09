define(['collections/tasks', 'views/tasks/item'], function(Tasks, TaskView) {
  var TaskList = Backbone.View.extend({
    el: $('#left .middle'),
    initialize: function() {
      Tasks.bind('add', this.addOne, this);
    },
    addOne: function(task) {
      var taskView = new TaskView({model: task});
      this.$el.append(taskView.render().el);
    }
  });
  return new TaskList;
})