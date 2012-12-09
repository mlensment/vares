define(['collections/tasks', 'text!templates/tasks/form.html'], function(Tasks, taskFormTemplate) {
  return new (Backbone.View.extend({
    el: $('#left .top'),
    template: _.template(taskFormTemplate, {data: {}}),
    events: {
      'keyup [name="title"]': 'toggleForm',
      'click button[name="save"]': 'save',
      'click button[name="close"]': 'toggleForm'
    },
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template);
      return this;
    }, toggleForm: function(e) {
      if(e.type == 'click') {
        e.preventDefault();
        this.$('.task-form')[0].reset();
      }
      this.$('.details').toggleClass('hidden', this.$('input[name="title"]').val() == '');
    },
    save: function(e) {
      e.preventDefault();
      Tasks.add(this.$('.task-form').serializeToObject());
      this.$('.task-form')[0].reset();
      this.$('.details').toggleClass('hidden');
    }
  }))();
});
