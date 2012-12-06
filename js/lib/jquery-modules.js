(function($) {
  $.fn.serializeToObject = function() {
    var formData = {};
    _(this.serializeArray()).each(function(nvp) {
        formData[nvp.name] = nvp.value;
    });
    return formData;
  };
})(jQuery);