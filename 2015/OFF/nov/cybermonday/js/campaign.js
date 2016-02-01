var market = $("#00N30000007fLM4").val();  

function loadInfo(){
	var url = window.location.toString();
	    input = url.split("?");
		end_count = input.length;

	if(url.length > input[end_count].length) {

		campaignID = input[end_count-1];

		$('#campaignID').val(campaignID);
	} else {

    $('#campaignID').val('701a0000002QqF1');
  }


}

function updateURL() {
    if(market=="Dental" || market=="Periodontology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/dental.html');
    } else if (market=="Aesthetic") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?aesthetic');
    } else if (market=="Cardiology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?cardio');
    } else if (market=="Dermatology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?derm');
    } else if (market=="Gastroenterology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?gastro');
    } else if (market=="Obstetrics Gynecology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?obgyn');
    } else if (market=="Otolaryngology") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?ent');
    } else if (market=="Pediatrics") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?pediatric');
    } else if (market=="Podiatry") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?podiatry');
    } else if (market=="Midwifery") {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html?midwifery');
    } else {
        $("#retURL").val('http://go.officite.com/Officite-Boost/medical.html');
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