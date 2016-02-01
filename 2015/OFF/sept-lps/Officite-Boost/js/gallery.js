function loadInfo(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;
		galleryURL=document.getElementById("galleryURL");

	if(url.length > 50) {

		marketURL = input[end_count-1];

		newGalleryURL = 'http://go.officite.com/gallery/'+marketURL+'/designs/';

		galleryURL.href=newGalleryURL;
		
	}
}