//hover divs

$(document).ready(function(){
    $('.icon_img').hover( function(){
        $(this).siblings('.hide').fadeToggle(00);
    });
});

