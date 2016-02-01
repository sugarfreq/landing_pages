function updateImage(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;
		payImage = document.getElementById("pay");
		getImage = document.getElementById("getimg");

	if(url.length > 50) {

		marketURL = input[end_count-1];

		if (marketURL=="derm" || marketURL=="gastro" || marketURL=="obgyn" || marketURL=="ent" || marketURL=="pediatric" || marketURL=="podiatry") {
	        payImage.src = "img/payfor-"+marketURL+".png";
	        getImage.src = "img/get-"+marketURL+".png";
	    
	    } else {
	        payImage.src = "img/payfor-medical.png";
	        getImage.src = "img/get-medical.png";
	    }
		
	}


}