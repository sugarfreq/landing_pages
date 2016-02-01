// keep label above form inputs after information has been entered

function moveLabel(formInput){
    var dataEmpty = document.getElementById(formInput);
        inputID = "#"+formInput;        
        placeHolder = $(inputID).attr('placeholder');

        console.log('placeHolder', placeHolder);

    if ((dataEmpty.value.length > 0) || (placeHolder.length > 0)){
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

bay_validate("#landing");

$('#landing').on('submit', function(){

    moveLabel("websiteFirstName");
    moveLabel("websiteLastName");
    moveLabel("websitePhone");
    moveLabel("websiteEmail");
});

