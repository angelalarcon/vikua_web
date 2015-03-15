$(document).ready(function(){
	$('section').css({'height':($(window).height())+'px'})

	if ($('.menu .nav-pills li').hasClass('active')) {
		$('.building').addClass('glow');
	} else {
		$('.building').removeClass('glow');
	};
	
	$('.menu .nav-pills li').click(function(){
		if ($(this).hasClass('active')) {
			$('.building').addClass('glow');
		} else {
			$('.building').removeClass('glow');
		};
	})
});