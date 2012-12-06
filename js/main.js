require.config({
  paths: {
    text: 'lib/text',
    templates: '../templates'
  }
});

require(['text', 'app'], function(text, App) {
  App.initialize();
});