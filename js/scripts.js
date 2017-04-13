$(document).ready(function () {
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Menu</a>').appendTo('#header > .container');
	$('<span class="fader"/>').appendTo('#header > .container');
	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});
	$('.services-slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: true,
		// autoplay: true,
		autospeed: 2000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1.666,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				centerMode: true,
				centerPadding: '20px'
			}
		},
		{
			
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '76px'
			}
		},
		{	
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '20px'
			}
		}
		]
	/*	autoplay: true,
		autospeed: 2000
	*/
	});/* Slider */
	 // $('.tb2').click(function(){
  //   	$(".services-slider").slick('slickNext');
  // 	});
});

$( window ).on('resize load', function() {

	if($(window).width() < 768){
		(function () {
			$('.tabs').each(function () {
				var $this = $(this);
				$this.find('.tab').hide();
				$($this.find('.active > a').attr('href')).show();
				$this.find('.tabnav a').click(function () {
					if (!$(this).parent().hasClass('active')) {
						$(this).parent().addClass('active').siblings('li').removeClass('active');
						$($(this).attr('href')).fadeIn(300).siblings('.tab').hide();
					}
					return false;
				});
			});
		}());
	}

});