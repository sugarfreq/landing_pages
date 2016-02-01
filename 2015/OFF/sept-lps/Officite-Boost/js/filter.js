var state = $("#state").val();
var market = $("#00N30000007fLM4").val(); 
var promocode = $("#promo").val();


function updateInfo() { 
  var code = promocode.toLowerCase();
  console.log('--debug at top of updateInfo.. promocode=', promocode, 'code=', code);

  //DentalBoost code
  if (code == "dentalboost") {
    if(market == "Dental" || market=="Periodontology") {

      if(state=="WI") {
        $("#campaignID").val('701a0000002QqGi'); //

      } else if(state=="NY") {
        $("#campaignID").val('701a0000002QqEc'); //

      } else if(state=="FL") {
        $("#campaignID").val('701a0000002QqFL'); //

      } else if(state=="NV") {
        $("#campaignID").val('701a0000002QqE8'); //

      } else if(state=="GA") {
        $("#campaignID").val('701a0000002QqGs'); //

      } else if(state=="CA") {
        $("#campaignID").val('701a0000002QqGJ'); //

      } else if(state=="CO") {
        $("#campaignID").val('701a0000002QqFp'); //

      } else if(state=="CT") {
        $("#campaignID").val('701a0000002QqGT'); //

      } else if(state=="HI") {
        $("#campaignID").val('701a0000002QqEr'); //

      } else if(state=="IL") {
        $("#campaignID").val('701a0000002QqES'); //

      } else if(state=="KY") {
        $("#campaignID").val('701a0000002QqGY'); //

      } else if(state=="MI") {
        $("#campaignID").val('701a0000002QqEh'); //

      } else if(state=="MN") {
        $("#campaignID").val('701a0000002QqEm'); //

      } else if(state=="MA") {
        $("#campaignID").val('701a0000002QqEN'); //

      } else if(state=="MO") {
        $("#campaignID").val('701a0000002QqE3'); //

      } else if(state=="MD") {
        $("#campaignID").val('701a0000002QqEw'); //

      } else if(state=="NC") {
        $("#campaignID").val('701a0000002QqGn'); //

      } else if(state=="NH") {
        $("#campaignID").val('701a0000002QqFf'); //

      } else if(state=="NJ") {
        $("#campaignID").val('701a0000002QqF6'); //

      } else if(state=="SC") {
        $("#campaignID").val('701a0000002QqFu'); //
      
      } else {
        $("#campaignID").val('701a0000002QqF1');

      }

    } 
  

    //AGDBoost code
  } else if (code == "agdboost") {
    $("#campaignID").val('701a0000002QqGO'); 
  

    //AACDBoost code
  } else if (code == "aacdboost") {
    $("#campaignID").val('701a0000002QqFk');
  

    //AAIDBoost code
  } else if (code == "aaidboost") {
    $("#campaignID").val('701a0000002QqH2');
  

    //OfficiteBoost code
  } else if (code == "officiteboost") {
    if (market == "Podiatry") {
      $("#campaignID").val('701a0000002QqG4');
    
    } else if (market == "Dermatology") {
      $("#campaignID").val('701a0000002QqFB');

    } else if (market == "Otolaryngology"){
      $("#campaignID").val('701a0000002QqFz');
    
    } else if (market == "Gastroenterology"){
      $("#campaignID").val('701a0000002QqEI');

    } else if (market == "Pediatrics"){
      $("#campaignID").val('701a0000002QqEX');

    } else {
        $("#campaignID").val('701a0000002QqF1');

    }


    //FreeBoost code
  } else if (code == "freeboost") {
    if (market == "Dental" || market == "Periodontology") {
      $("#campaignID").val('701a0000002QqED');
    
    } else if (market == "Pediatrics") {
      $("#campaignID").val('701a0000002QqGd');

    } else if (market == "Podiatry") {
      $("#campaignID").val('701a0000002QqGE');

    } else if (market == "Obstetrics Gynecology"){
      $("#campaignID").val('701a0000002QqGx');

    } else {
        $("#campaignID").val('701a0000002QqF1');

    }
  

    //PerioBoost code
  } else if (code == "perioboost"){
      $("#campaignID").val('701a0000002QqG9');
  

    //SeptBoost code
  } else if (code == "septboost"){
    if (market == "Dental" || market == "Periodontology"){
      $("#campaignID").val('701a0000002QqFV');

    } else {
      $("#campaignID").val('701a0000002QqFQ');

    }


    //AADBoost code
  } else if (code == "aadboost"){
      $("#campaignID").val('701a0000002QqFG');


      //Boost0915
  } else if (code == "boost0915" || code == "boosto915") {
    if (market == "Dental" || market == "Periodontology") {
      $("#campaignID").val('701a0000002Qrcb');
    
    } else if (market == "Pediatrics") {
      $("#campaignID").val('701a0000002QrcR');

    } else if (market == "Podiatry") {
      $("#campaignID").val('701a0000002QrcM');

    } else if (market == "Obstetrics Gynecology"){
      $("#campaignID").val('701a0000002QrcW');

    } else if (market == "Dermatology"){
      $("#campaignID").val('701a0000002Qrcg');

    } else {
        $("#campaignID").val('701a0000002QqF1');

    }

    //no code
  } else {
      $("#campaignID").val('701a0000002QqF1');

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


