

            //hover divs





//hover divs



//hover divs

$(document).ready(function(){

    var $icon_img = $('.icon_img'),
        $hide     = $('.hide');

        $icon_img.on('mouseenter', function(){
            $(this).addClass('icon-hover');
            updateHover(this);
        });
        $icon_img.on('mouseleave', function(){
            $(this).removeClass('icon-hover');
            updateHover(this);
        });
        $hide.on('mouseenter', function(){
            $(this).addClass('hide-hover');
            updateHover(this);
        });
        $hide.on('mouseleave', function(){
            $(this).removeClass('hide-hover');
            updateHover(this);
        });


        function updateHover(target) {

            console.log(target);

            if ($(target).hasClass('icon-hover') || $(target).hasClass('hide-hover'))
            {
                $(target).siblings('.hide').show();        
            } else {
                $(target).siblings('.hide').hide();
            } 
        };

});


$(document).ready(function(){
    $('.icon_img').hover( function(){
        $(this).siblings('.hide').fadeToggle(00);
    });
});

