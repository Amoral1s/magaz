$(document).ready(function () {
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
});


