var state = $("#state").val();
var market = $("#00N30000007fLM4").val(); 
var promocode = $("#promo").val();


function updateInfo() { 
  var code = promocode.toLowerCase();

  //Dental code
  if (code == "dental") {
    if(market == "Dental" || market=="Periodontology") {

      if(state=="CT") {
        $("#campaignID").val('701a0000000vOAA'); //

      } else if(state=="FL") {
        $("#campaignID").val('701a0000000vOAU'); //

      } else if(state=="GA") {
        $("#campaignID").val('701a0000000vOBI'); //

      }  else if(state=="HI") {
        $("#campaignID").val('701a0000000vOBm'); //
      
      } else if(state=="IL") {
        $("#campaignID").val('701a0000000vO9v'); //

      } else if(state=="KY") {
        $("#campaignID").val('701a0000000vOAZ'); //

      } else if(state=="CA") {
        $("#campaignID").val('701a0000000vOBN'); //

      } else if(state=="MI") {
        $("#campaignID").val('701a0000000vOAt'); //

      } else if(state=="MN") {
        $("#campaignID").val('701a0000000vOAj'); //

      } else if(state=="MA") {
        $("#campaignID").val('701a0000000vOAP'); //

      } else if(state=="MD") {
        $("#campaignID").val('701a0000000vOAe'); //

      } else if(state=="NC") {
        $("#campaignID").val('701a0000000vOBS'); //

      } else if(state=="NV") {
      $("#campaignID").val('701a0000000vOAF'); //
      
      } else if(state=="NY") {
        $("#campaignID").val('701a0000000vOB3'); //

      } else if(state=="NH") {
        $("#campaignID").val('701a0000000vOBc'); //

      } else if(state=="NJ") {
        $("#campaignID").val('701a0000000vOB8'); //

      } else if(state=="SC") {
        $("#campaignID").val('701a0000000vOBr'); //

      } else {
        $("#campaignID").val('701a0000000vOA0');

      }

    } 
  

    //AGD code
  } else if (code == "agd") {
    $("#campaignID").val('701a0000000vOBh'); 


    //Health code
  } else if (code == "health") {
    if (market == "Podiatry") {
      $("#campaignID").val('701a0000000vOAo');
    
    } else if (market == "Dermatology") {
      $("#campaignID").val('701a0000000vOA5');

    } else if (market == "Otolaryngology"){
      $("#campaignID").val('701a0000000vOAK');
    
    } else if (market == "Gastroenterology"){
      $("#campaignID").val('701a0000000vOBX');

    } else if (market == "Pediatrics"){
      $("#campaignID").val('701a0000000vOBD');

    } else {
        $("#campaignID").val('701a0000000vOA0');

    }
  

    //Perio code
  } else if (code == "perio"){
      $("#campaignID").val('701a0000000vOAy');


    //no code
  } else {
      $("#campaignID").val('701a0000000vOA0');

  }
}

function updateURL() {
    if(market=="Dental" || market=="Periodontology") {
        $("#retURL").val('http://go.officite.com/officite65/dental.html');
    } else if (market=="Aesthetic") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?aesthetic');
    } else if (market=="Cardiology") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?cardio');
    } else if (market=="Dermatology") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?derm');
    } else if (market=="Gastroenterology") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?gastro');
    } else if (market=="Obstetrics Gynecology") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?obgyn');
    } else if (market=="Otolaryngology") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?ent');
    } else if (market=="Pediatrics") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?pediatric');
    } else if (market=="Podiatry") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?podiatry');
    } else if (market=="Midwifery") {
        $("#retURL").val('http://go.officite.com/officite65/medical.html?midwifery');
    } else {
        $("#retURL").val('http://go.officite.com/officite65/medical.html');
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

$("#promo").change(function() {
    promocode = $(this).val();

    updateInfo();
});

//switch periodontology market to dental for salesforce
$("#lead_capture").on('submit', function(e) {
  if (market == "Periodontology"){
    $("#00N30000007fLM4").val('Dental');
  }
 
});


