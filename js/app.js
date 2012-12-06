//This is where everything begins.
define(['collections/tasks', 'views/tasks/list', 'views/tasks/new'], function(Tasks) {
  return { initialize: function() {
      $(".datepicker").live('focus', function() {
        $(this).datepicker({ dateFormat: "dd.mm.yy" });
      });
      Tasks.add();
      Tasks.add();
    }
  }
});