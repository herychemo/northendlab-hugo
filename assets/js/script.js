(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);

    let theme = localStorage.getItem('app-theme');
    if (theme) {
      $('#select-theme').val(theme);
      onThemeChange(theme);
    }
  });

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
    setTimeout(function () {
      $('.search-box').focus();
    }, 400);
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

})(jQuery);

const onThemeChange = function(theme) {
  const $body = $('body');

  $body.removeClass(function (index, className) {
    return (className.match (/(^|\s)theme-\S+/g) || []).join(' ');
  });

  $body.addClass(theme);
  localStorage.setItem('app-theme', theme);
}
