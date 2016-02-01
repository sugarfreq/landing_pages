// keep label above form inputs after information has been entered

function moveLabel(formInput){
    var dataEmpty = document.getElementById(formInput);
        inputID = "#"+formInput;

    if (dataEmpty.value.length > 0){
        $(inputID).addClass('entered');
        
     } else {
    	$(inputID).removeClass('entered');
    }

}

$("#websiteFirstName").change(function(){
    moveLabel("websiteFirstName");
});
$("#websiteLastName").change(function(){
    moveLabel("websiteLastName");
});
$("#websitePhone").change(function(){
    moveLabel("websitePhone");
});
$("#websiteEmail").change(function(){
    moveLabel("websiteEmail");
});


//slide to reveal package information

$('.icon_over').on('click', function(){
    $(this).slideToggle('slow');
});

$('.service-list').on('click', function(){
    $(this).siblings('.icon_over').slideToggle('slow');
});

