$(document).ready(function(){
	$('section').css({'height':($(window).height())+'px'})

	$('.menu .nav-pills li a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');

		$(".building").removeClass('glow');

		data = $(this).data("building"); 
		$("."+data).addClass('glow');

		if ($('.menu ul li').hasClass('active')) {
			$('#city_container').css('width', '50%');
			$('#city_info').addClass('show-info')
			$('.services').addClass('push_sidebar')
		} else {
			$('#city_container').css('width', '100%');
		};
		
		$('.message').css('opacity', '0');
	})

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height()) {
		$('#box-3 .bordered-white').addClass('move-left');
	}
	else {
		$('#box-3 .bordered-white').removeClass('move-left');
	}
	
	$('.menu .nav-pills li a').mouseover(function() {
		$('.message').css('opacity', '1');
	});
	$('.menu .nav-pills li a').mouseout(function() {
		$('.message').css('opacity', '0');
	});
});