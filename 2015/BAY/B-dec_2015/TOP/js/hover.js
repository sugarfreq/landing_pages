$(document).ready(function(){

	if (window.innerWidth > 960) {
	    $('.icon_img').on('mouseenter', function(){
	        $(this).siblings('.icon_hover').fadeIn(300);
	    });
	    $('.icon_hover').on('mouseleave', function(){
	        $('.icon_hover').fadeOut(300);
	    });
	}
});