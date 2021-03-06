;(function($) {
  'use strict';

  var $html;

  $html = $('html');

  $html.removeClass('no-js').addClass('js');

  $(function() {
    $('.work-item').on('mouseleave', function() {
      $(this).find('.work-item__device-inner').animate({scrollTop:0},250);
    });

    $('.site-header a[href="#works"]').on('click', function() {
      var $target = $('#works');
      var target_offset = $target.offset().top;

      $('html,body').animate({scrollTop: target_offset},250);
    });

    $('.work-item__cta').on('click', function() {
      $(this).closest('.work-item').toggleClass('work-item--focus');
      if ($(this).closest('.work-item').hasClass('work-item--focus')) {
        $('html,body').animate({
          scrollTop: $(this).offset().top - 24
        }, 250);
      }
    });

    $('.work-item-devices').on('click', '[data-device-images]', function(e) {
      var $el = $(this);
      var $img = $el.find('img');
      var current_image = $img.attr('src');
      var images = $el.attr('data-device-images').split(',');
      if (images.length < 2) { return; }
      var new_image = images.shift();

      images.push(new_image);
      $el.attr('data-device-images', images.join(',')).addClass('loading');
      $el.children().animate({scrollTop: 0}, 250);

      $img.on('load', function() {
        $el.removeClass('loading');
      }).attr('src', new_image);
    });
  });
})(jQuery);
