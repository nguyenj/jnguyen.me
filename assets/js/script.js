// ;(function($) {

//   $(window).on('load resize', function() {
//     var $slider = $('.article-hero');
//     $slider.each(function() {
//       var $slide = $(this).children();
//       var slideNum = $slide.length;
//       var slideWidth = $(this).outerWidth(true);

//       $slide.wrapAll('<div class="slider" />');
//       $('<a href="#prev" class="prev">Previous</a>').appendTo($(this));
//       $('<a href="#next" class="next">Next</a>').appendTo($(this));
//       $slide.css('width', slideWidth);

//       index = 0;
//       $(this).find('a').on('click', function() {
//         var isPrev = $(this).hasClass('prev');

//         if ( isPrev ) {
//           index--;
//           if ( index === -1 ) {
//             index = slideNum-1;
//           }
//         } else {
//           index++;
//           if ( index === slideNum ) {
//             index = 0;
//           }
//         }
//         console.log(this,index);
//         $('.slider').css('left', (index * - 100) + "%");
//         return false;
//       });

//     });

//   });

// })(jQuery);