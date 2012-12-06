define(function() {
  return Backbone.Model.extend({
    defaults: {
      title: 'CCS - Otsekorralduslepingute parandus asfsfds adf sd s sd ss ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lorem leo, at lacinia neque. Integer tellus sem, mattis at gravida tristique, vehicula non erat. Sed semper condimentum mollis. Morbi pretium odio in sapien vehicula vestibulum. Quisque nisi lacus, commodo at pharetra eu, porttitor sit amet tellus. Proin vitae tortor turpis. Praesent in justo augue. ',
      priorityCode: 'CRITICAL',
      from: '01.12.2012',
      to: '15.12.2012',
      finished: '',
      statusCode: 'TODO'
    },

    initialize: function() {
      this.set({priority: 'Critical', status: 'TODO'});
    }
  });
});