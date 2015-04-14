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
		
		$('.message').hide();
	})

	$('#close_tab').click(function() {
		$('.menu ul li').removeClass('active');
		$('#city_container').css('width', '100%');
		$('#city_info').removeClass('show-info')
		$('.services').removeClass('push_sidebar')
	});

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height()) {
		$('#box-3 .bordered-white').addClass('move-left');
	}
	else {
		$('#box-3 .bordered-white').removeClass('move-left');
	}
	
	$('#tablink-1').mouseover(function() {
		$('#message_1').show();
	});
	$('#tablink-1').mouseleave(function() {
		$('#message_1').hide();
	});

	$('#tablink-2').mouseover(function() {
		$('#message_2').show();
	});
	$('#tablink-2').mouseleave(function() {
		$('#message_2').hide();
	});

	$('#tablink-3').mouseover(function() {
		$('#message_3').show();
	});
	$('#tablink-3').mouseleave(function() {
		$('#message_3').hide();
	});

	$('#tablink-4').mouseover(function() {
		$('#message_4').show();
	});
	$('#tablink-4').mouseleave(function() {
		$('#message_4').hide();
	});

	$('#tablink-5').mouseover(function() {
		$('#message_5').show();
	});
	$('#tablink-5').mouseleave(function() {
		$('#message_5').hide();
	});

	$('#tablink-6').mouseover(function() {
		$('#message_6').show();
	});
	$('#tablink-6').mouseleave(function() {
		$('#message_6').hide();
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > $('.services').height() + $('.about').height()) {
			$('.parallax-layer.back').addClass('up');
		}
		else {
			$('.parallax-layer.back').removeClass('up');
		}
		if ($(window).scrollTop() > $('.services').height() + $('.about').height()) {
			$('.parallax-layer.mid').addClass('up');
		}
		else {
			$('.parallax-layer.mid').removeClass('up');
		}
	});

});