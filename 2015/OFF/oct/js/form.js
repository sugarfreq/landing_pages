

// keep label above form inputs after information has been entered

function moveLabel(formInput){
    var dataEmpty = document.getElementById(formInput);
        inputID = "#"+formInput;
        placeHolder = $(inputID).attr('placeholder');

    if ((dataEmpty.value.length > 0) || (placeHolder.length > 0)){
        $(inputID).addClass('entered');
        
     } else {
    	$(inputID).removeClass('entered');
    }

}

$("#first_name").change(function(){
    moveLabel("first_name");
});

$("#last_name").change(function(){
    moveLabel("last_name");
});

$("#email").change(function(){
    moveLabel("email");
});

$("#phone").change(function(){
    moveLabel("phone");
});

ofc_validate("#lead_capture");

$('#lead_capture').on('submit', function(){

	moveLabel("first_name");
	moveLabel("last_name");
	moveLabel("email");
});