define(['collections/tasks', 'views/tasks/item'], function(Tasks, TaskView) {
  var TaskList = Backbone.View.extend({
    todoEl: $('#left .middle'),
    inProgressEl: $('#center .middle'),
    doneEl: $('#right .middle'),
    initialize: function() {
      Tasks.bind('add', this.addOne, this);
    },
    addOne: function(task) {
      var taskView = new TaskView({model: task});
      this.todoEl.append(taskView.render().el);
    },
    addAll: function() {
      var todo = Tasks.todo();
      var inProgress = Tasks.inProgress();
      var done = Tasks.done();

    }
  });
  return new TaskList;
})