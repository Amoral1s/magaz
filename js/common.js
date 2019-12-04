$(document).ready(function () {
  $('.call-category').on('click', () => {
    $('.header-nav-bottom nav').slideToggle(600);
  });
  jQuery('li.has-children').mouseenter(function() {
    jQuery(this).children('ul').slideDown(500);
  });
  
  jQuery('.has-children').mouseleave(function() {
    jQuery(this).children('ul').slideUp(500);
  });

  jQuery('.new-left-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplayspeed: 4000,
      speed: 500
  });
  if($(window).width() < 578) {
  jQuery('.sale-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: false,
      autoplayspeed: 5000,
      speed: 500
  });
} else if($(window).width() < 992) {
  jQuery('.sale-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 500
  });
} else {
  jQuery('.sale-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 500
  });
}




  if($(window).width() < 578) {
    jQuery('.greeds-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplayspeed: 5000,
        speed: 500
    });
} else if($(window).width() < 992) {
    jQuery('.greeds-wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplayspeed: 5000,
        speed: 500
    });
} else {
  jQuery('.greeds-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 500
  });
}
if($(window).width() < 578) {
  jQuery('.sponsor').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 500
  });
} else {
  jQuery('.sponsor').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 500
  });
}

  $('.menu-toggle').on('click', () => {
    $('.header-toggle-top').slideToggle(600);
    $('.menu-toggle').toggleClass('menu-toggle-active');
  });
 
});


