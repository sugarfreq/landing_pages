function updateImage(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;
		heroImage = document.getElementById("offerImg1");
		bodyImage = document.getElementById("offerImg2");
		baseURL = input[end_count-2];

	if(url.length > baseURL.length) {

		marketURL = input[end_count-1];

		console.log('marketURL:',marketURL);

		if (marketURL=="dental" || marketURL=="derm" || marketURL=="gastro" || marketURL=="obgyn" || marketURL=="ent" || marketURL=="pediatric" || marketURL=="podiatry") {
	        heroImage.src = "img/imac-"+marketURL+".png";
	        bodyImage.src = "img/computers-"+marketURL+".png";
	    
	    } else {
	        heroImage.src = "img/imac-med.png";
	        bodyImage.src = "img/computers-med.png";
	    }
		
	} else {
        heroImage.src = "img/imac-med.png";
        bodyImage.src = "img/computers-med.png";
    }


}