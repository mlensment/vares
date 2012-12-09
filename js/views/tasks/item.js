define(['text!templates/tasks/item.html', 'text!templates/tasks/form.html'], function(taskTemplate, taskFormTemplate) {
  return Backbone.View.extend({
    className: "task",
    template: _.template(taskTemplate),
    formTemplate: _.template(taskFormTemplate),
    events: {
        'click .show-description': 'toggleDescription',
        'dblclick li': 'toggleForm',
        'click button[name="save"]': 'save'
    },
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('remove', this.remove, this);
    },
    render: function() {
      var params = this.model.toJSON();
      params.statusStyle = params.statusCode.toLowerCase();
      this.$el.html(this.template(params));
      return this;
    },
    toggleDescription: function(event) {
      var visible = this.$('.description').is(':visible');
      // this.$('.arrow').toggleClass('arrow-inverted', !visible);
      if(visible) {
        this.$('.description').hide();
        this.$('.arrow').html('&raquo;');
      } else {
        this.$('.description').show();
        this.$('.arrow').html('&laquo;');
      }
    },
    toggleForm: function() {
      this.$el.html(this.formTemplate({data: this.model.toJSON()}));
      this.$('.details').removeClass('hidden');
    },
    save: function(e) {
      e.preventDefault();
      this.model.set(this.$('.task-form').serializeToObject());
    }
  });
});