function loadInfo(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;
		galleryURL=document.getElementById("galleryURL");
		galleryURL2=document.getElementById("galleryURL2");
		baseURL = input[end_count-2];

	if (end_count > 1){
		if(url.length > baseURL.length) {

			marketURL = input[end_count-1];

			newGalleryURL = 'http://go.officite.com/gallery/'+marketURL+'/designs/';

			galleryURL.href=newGalleryURL;
			galleryURL2.href=newGalleryURL;
			
		} 
	}
}