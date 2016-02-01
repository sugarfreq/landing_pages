var state = $("#state").val();
var market = $("#00N30000007fLM4").val(); 
var promocode = $("#promo").val();
var url = window.location.toString();
    input = url.split("?src=");
    end_count = input.length;
    baseURL = input[end_count-2];
    heroImage = document.getElementById("heroImg");
    source = input[end_count-1];

if (end_count > 1){
  if(url.length > baseURL.length) {

    source = input[end_count-1];
    if (source=="dental" || source=="aacd" || source=="agd" || source=="perio" || source=="aaid") {
      heroImage.src = "img/hero-img-dental.png";
    } else {
      heroImage.src = "img/hero-img-med.png";
    }
  } 
}

function updateInfo() { 


  //Dental URL
  if (source == "dental") {

    if(state=="AL") {
      $("#campaignID").val('701a0000000vRIv'); //

    } else if(state=="CO") {
      $("#campaignID").val('701a0000000vRKD'); //

    } else if(state=="CT") {
      $("#campaignID").val('701a0000000vRIl'); //

    }else if(state=="FL") {
      $("#campaignID").val('701a0000000vRJA'); //

    } else if(state=="GA") {
      $("#campaignID").val('701a0000000vRKX'); //

    } else if(state=="IL") {
      $("#campaignID").val('701a0000000vRJK'); //

    } else if(state=="KY") {
      $("#campaignID").val('701a0000000vRKN'); //

    } else if(state=="CA") {
      $("#campaignID").val('701a0000000vRIW'); //

    } else if(state=="MI") {
      $("#campaignID").val('701a0000000vRJZ'); //

    } else if(state=="MA") {
      $("#campaignID").val('701a0000000vRJ0'); //

    } else if(state=="MN") {
      $("#campaignID").val('701a0000000vRJt'); //

    } else if(state=="MO") {
      $("#campaignID").val('701a0000000vRJy'); //

    } else if(state=="MD") {
      $("#campaignID").val('701a0000000vRJo'); //

    } else if(state=="MD") {
      $("#campaignID").val('701a0000000vOAe'); //

    } else if(state=="NC") {
      $("#campaignID").val('701a0000000vRKw'); //

    } else if(state=="NV") {
      $("#campaignID").val('701a0000000vRKm'); //
    
    } else if(state=="NY") {
      $("#campaignID").val('701a0000000vRKc'); //

    } else if(state=="NH") {
      $("#campaignID").val('701a0000000vRKS'); //

    } else if(state=="NJ") {
      $("#campaignID").val('701a0000000vRIR'); //

    } else if(state=="SC") {
      $("#campaignID").val('701a0000000vRK3'); //

    } else if(state=="WI") {
      $("#campaignID").val('701a0000000vRK8'); //

    } else {
      $("#campaignID").val('701a0000000vRKI');

    }
  
    //AAID URL
  } else if (source == "aaid") {
    $("#campaignID").val('701a0000000vRKr'); 

    //AACD URL
  } else if (source == "aacd") {
    $("#campaignID").val('701a0000000vRJj'); 

    //AGD URL
  } else if (source == "agd") {
    $("#campaignID").val('701a0000000vRJP'); 


    //medical URL
  } else if (source == "medical") {
    if (market == "Podiatry") {
      $("#campaignID").val('701a0000000vRIg');
    
    } else if (market == "Dermatology") {
      $("#campaignID").val('701a0000000vRJe');

    } else if (market == "Otolaryngology"){
      $("#campaignID").val('701a0000000vRIq');
    
    } else if (market == "Gastroenterology"){
      $("#campaignID").val('701a0000000vRJU');

    } else if (market == "Pediatrics"){
      $("#campaignID").val('701a0000000vRKh');

    } else {
        $("#campaignID").val('701a0000000vRKI');

    }
  

    //Perio URL
  } else if (source == "perio"){
      $("#campaignID").val('701a0000000vRJ5');


    //no URL
  } else {
      $("#campaignID").val('701a0000000vRKI');

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

$("#state").change(function() {
    state = $(this).val();
    updateInfo();
});

$("#00N30000007fLM4").change(function() {
    market = $(this).val();

    updateInfo();
    updateURL();
});

//switch periodontology market to dental for salesforce
$("#lead_capture").on('submit', function(e) {
  if (market == "Periodontology"){
    $("#00N30000007fLM4").val('Dental');
  }
 
});


