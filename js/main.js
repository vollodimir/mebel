function PopUpShow() {
  $('.popup').show();
}
function PopUpHide() {
  $('.popup').hide();
}

jQuery(document).ready(function ($) {
  // go-top

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 800) {
      $('.go-top').show();
    } else {
      $('.go-top').hide();
    }
  });

  $('.go-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  ///----top-menu
  var $window = $(window),
    $target = $('.header__wrapper'),
    $topPosition = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $topPosition) {
      $target.addClass('header__fixed');
      return;
    } else {
      $target.removeClass('header__fixed');
    }
    return;
  });

  ////----sub menu
  var $flag = true;
  $('.header__menu--have-menu').on('click', function () {
    $(this).children('.header__sub-menu').slideToggle('fast');
  });

  //---sliders
  //https://kenwheeler.github.io/slick/

  $('.testimonials__items').slick({
    dots: true,
    dotsClass: 'testimonials__dots',
    infinite: true,
    speed: 600,
    nextArrow:
      '<button type="button" class="testimonials__right"><img src="./img/testimonial_left.svg" alt="Next" srcset="" /></button>',
    prevArrow:
      '<button type="button" class="testimonials__left"><img src="./img/testimonial_left.svg" alt="Prev" srcset="" /></button>',
  });
});
