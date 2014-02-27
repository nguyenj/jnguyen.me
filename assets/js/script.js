(function ($) {
  'use strict';

  var App = {
    toggleClass: function (selector, className) {
      $(selector).toggleClass(className);
    }
  };

  $(window).on('load', function (e) {
    App.toggleClass('body', 'loading');
  });
  
})(jQuery);