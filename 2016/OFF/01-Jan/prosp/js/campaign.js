var market = $("#00N30000007fLM4").val();  

function loadInfo(){
	var url = window.location.toString();
	    campaignArray = url.split("&campID=");
        marketArray = campaignArray[0].split("AoP=");
		campaignEnd_count = campaignArray.length;
        marketEnd_count = marketArray.length;
        baseURL =  marketArray[marketEnd_count-2];
        heroImage = document.getElementById("heroImg");

    if (campaignEnd_count > 1){
    	if(url.length > baseURL.length) {

    		campaignID = campaignArray[campaignEnd_count-1];
            marketURL = marketArray[marketEnd_count-1]; 

    		$('#campaignID').val(campaignID);

            if (marketURL=="dental" || marketURL=="derm" || marketURL=="gastro" || marketURL=="obgyn" || marketURL=="ent" || marketURL=="pediatric" || marketURL=="podiatry") {
                heroImage.src = "img/hero-img-"+marketURL+".png";
    
            } else {
                heroImage.src = "img/hero-img-med.png";
            };

    	} else {

        $('#campaignID').val('701a0000000vRKI');
      }
    }


}

function updateURL() {
    if(market=="Dental" || market=="Periodontology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=dental');
    } else if (market=="Aesthetic") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=aesthetic');
    } else if (market=="Cardiology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=cardio');
    } else if (market=="Dermatology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=derm');
    } else if (market=="Gastroenterology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=gastro');
    } else if (market=="Obstetrics Gynecology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=obgyn');
    } else if (market=="Otolaryngology") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=ent');
    } else if (market=="Pediatrics") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=pediatric');
    } else if (market=="Podiatry") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=podiatry');
    } else if (market=="Midwifery") {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html?AoP=midwifery');
    } else {
        $("#retURL").val('http://go.officite.com/NewYear/new-year.html');
    }
}

//update retURL when market changes
$("#00N30000007fLM4").change(function() {
    market = $(this).val();

    updateURL();
});

//switch periodontology market to dental for salesforce
$("#lead_capture").on('submit', function(e) {
  if (market == "Periodontology"){
    $("#00N30000007fLM4").val('Dental');
  }

  updateURL();
 
});