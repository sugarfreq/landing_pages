function matchAoP(){
	var url = window.location.toString();
	    input = url.split("?AoP=");
		end_count = input.length;
		galleryURL=document.getElementsByClassName("galleryURL");
		phone=document.getElementsByClassName("phnumber");
		heroImage = document.getElementById("heroImg");
		tab1Image = document.getElementById("tab1Img");
		tab2Image = document.getElementById("tab2Img");
		baseURL = input[end_count-2];

	if (end_count > 1){
		if(url.length > baseURL.length) {

			marketURL = input[end_count-1];

			if (marketURL=="dental" || marketURL=="derm" || marketURL=="gastro" || marketURL=="obgyn" || marketURL=="ent" || marketURL=="pediatric" || marketURL=="podiatry") {
	        		heroImage.src = "img/hero-img-"+marketURL+".png";
	        		tab1Image.src = "img/computer-"+marketURL+".jpg";
		        	tab2Image.src = "img/seo-"+marketURL+".jpg";
	    
			    } else {
			        heroImage.src = "img/hero-img-med.png";
			        tab1Image.src = "img/computer-med.jpg";
		        	tab2Image.src = "img/seo-med.jpg";
			    }

			newGalleryURL = 'http://go.officite.com/gallery/'+marketURL+'/designs/';

			if(marketURL =="dental"){
				newPhone = "855.277.4927";
			} else {
				newPhone = "866.724.9922";
			}

			for (var i=0; i < galleryURL.length; i++){
				galleryURL[i].href=newGalleryURL;
			}

			for (var i=0; i < phone.length; i++){
				phone[i].textContent = newPhone;
			}

			
		} 
	}
}

