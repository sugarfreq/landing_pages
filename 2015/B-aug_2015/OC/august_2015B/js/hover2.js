

            //hover divs





//hover divs



$(document).ready(function(){
        $('.icon_img').on('mouseenter', function(){
            $(this).addClass('icon-hover');
            updateHover();
        });
        $('.icon_img').on('mouseleave', function(){
            $(this).removeClass('icon-hover');
            updateHover();
        });
        $('.hide').on('mouseenter', function(){
            $(this).addClass('hide-hover');
            updateHover();
        });
        $('.hide').on('mouseleave', function(){
            $(this).removeClass('hide-hover');
            updateHover();
        });


        function updateHover() {
            if ($('.icon_img').hasClass('icon-hover') || $('.hide').hasClass('hide-hover'))
            {
                console.log('icon-hover')
                $(this).siblings('.hide').show();        
            } else {
                console.log('no icon-hover' )
                $(this).siblings('.hide').hide();
            } 
        };

});


$(document).ready(function(){
    $('.icon_img').hover( function(){
        $(this).siblings('.hide').fadeToggle(00);
    });
});

