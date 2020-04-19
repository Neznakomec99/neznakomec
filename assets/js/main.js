$(document).ready(function() {
$('#carousel').slick({
	autoplay:false,
    mobileFirst:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	pauseOnHover: true,
	focusOnSelect: true,
	arrows: true,
	appendArrows: $('.position-vindler'),
	appendDots: $('.dots'),
	responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
    cssEase: 'linear',
	adaptiveHeight: true,
	autoplaySpeed: 5000,
	accessibility: true
});

$('#carousel-team').slick({
	autoplay:false,
    mobileFirst:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	pauseOnHover: true,
	focusOnSelect: true,
	arrows: true,
	appendArrows: $('.position-team'),
	appendDots: $('.dots-team'),
	responsive: [
	{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
    cssEase: 'linear',
	adaptiveHeight: true,
	autoplaySpeed: 5000,
	accessibility: true
});
});
/**
$('.carousel-wrapper').css('background-image', 'url('+$('#carousel .slick-current .preview img').attr('src')+')');

$('#carousel').on('afterChange', function(){
	$('.carousel-wrapper').css('background-image', 'url('+$('#carousel .slick-current .preview img').attr('src')+')');
});
**/
$(document).ready(function(){
    var touch = jQuery('.burger-container > a');
    var menu = jQuery('.menu-two');
    jQuery(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();	
		$(".burger-container > a").toggleClass("active");
    }); 
});

$('.menu-top a[href^="#"], .dot-site a[href^="#"], .menu-two a[href^="#"]').click(function(){
var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
  return false;
});

