$(document).ready(function(){
	$('section').css({'height':($(window).height())+'px'})

	$('.menu .nav-pills li a').click(function(){
		$(".building").removeClass('glow');

		data = $(this).data("building"); 
		$("."+data).addClass('glow');
		
	})
});