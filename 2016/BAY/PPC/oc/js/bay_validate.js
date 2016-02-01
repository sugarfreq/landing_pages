// can we use placeholder?
var ph;
var errors = new Array();

// can we use placeholder?
jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test){jQuery.support.placeholder = true; ph = jQuery.support.placeholder;}
});

function bay_validate(target_form){

	// the function deals with 3 states, valid(unfilled), error and being fixed.
	
	$(target_form).submit(function(validate){
	
		var valid_field = false;
		var valid_form = true;
		
		$('.required').each(function(){
		
			var fieldtype = find_type(this);
			
			valid_field = run_validate($(this).val(), fieldtype);
		
			if (valid_field != true){
				error_state(this, fieldtype);
			}
			
			$('.errors_input').focus(function(){
				valid_state($(this));
			});
			
			if (valid_field == false){
				valid_form = false;
			}
		});
	    
		// stop the submission if there are errors
		if (valid_form != false)
		{
			return true;
		}

	    // if no errors, let the form submit
	    return false;
	});
}

function error_state(input, type){
	
	$(input).addClass('errors_input');
	$(input).val('');
		
	if (ph == true){
		$(input).attr('placeholder', errors[type]);
	}
	
	else{
		$(input).val(errors[type]);
	}
}

function valid_state(clicked){
	
	if (ph != true && $(clicked).hasClass('errors_input')){
		$(clicked).val('');
	}
	
	else{
		$(clicked).attr('placeholder', '');
	}
	
	$(clicked).removeClass('errors_input');
} 

function run_validate(value, type){
	
	var valid = false;
	
	if (type == 'email'){
		// set the regular expression for email 	
		match = value.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\..{2,2}))$)\b/gi);
		if (match == null){
		valid = false;}
		else{
			valid = true;
		}
	}
	
	else if (type == 'phone'){
		
		// set the regular expression for email 	
		match = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
		if (match != null){valid = true;}
	}
	
	else{
		if (value != ''){valid = true;}
	}
	
	if (value.indexOf('Please Enter') !== -1)
	{valid = false;}
	
	return valid;
}

function find_type(element){
	
	var type;
	
	if ($(element).hasClass('name')){
		type = "name";
		errors[type] = 'Please Enter a Name';
	}
	
	if ($(element).hasClass('fname')){
		type = "fname";
		errors[type] = 'Please Enter a First Name';
	}
	
	else if($(element).hasClass('lname')){
		type = "lname";
		errors[type] = 'Please Enter a Last Name';
	}
	
	else if($(element).hasClass('email')){
		type = "email";
		errors[type] = 'Please Enter a Valid Email Address';
	}
	
	else if($(element).hasClass('phone')){
		type = "phone";
		errors[type] = 'Please Enter a Valid Phone Number';
	}
	
	else if($(element).hasClass('street')){
		type = "street";
		errors[type] = 'Please Enter a Street Address';
	}
	
	else if($(element).hasClass('city')){
		type = "city";
		errors[type] = 'Please Enter a City';
	}
	
	else if($(element).hasClass('state')){
		type = "state";
		errors[type] = 'Please Enter a State';
	}
	
	else if($(element).hasClass('assoc')){
		type = "assoc";
		errors[type] = 'Please Enter an Association';
	}
	
	else{
		type = 'generic';
		errors[type] = 'This Field Is Required';
	}
	
	return type;
}