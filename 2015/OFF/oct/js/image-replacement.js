function updateImage(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;
		heroImage = document.getElementById("heroImg");

	if(url.length > 50) {

		marketURL = input[end_count-1];

		if (marketURL=="dental" || marketURL=="derm" || marketURL=="gastro" || marketURL=="obgyn" || marketURL=="ent" || marketURL=="pediatric" || marketURL=="podiatry") {
	        heroImage.src = "img/computers-"+marketURL+".png";
	    
	    } else {
	        heroImage.src = "img/computers-med.png";
	    }
		
	} else {
        heroImage.src = "img/computers-med.png";
    }


}