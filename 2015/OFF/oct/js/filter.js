var state = $("#state").val();
var market = $("#00N30000007fLM4").val(); 
var promocode = $("#promo").val();


function updateInfo() { 
  var code = promocode.toLowerCase();

  //DentalBoost code
  if (code == "dental") {
    if(market == "Dental" || market=="Periodontology") {

      if(state=="FL") {
        $("#campaignID").val('701a0000002Qrhl'); //

      } else if(state=="GA") {
        $("#campaignID").val('701a0000002QriP'); //

      } else if(state=="CA") {
        $("#campaignID").val('701a0000002QriA'); //

      } else if(state=="CT") {
        $("#campaignID").val('701a0000002Qrie'); //

      } else if(state=="IL") {
        $("#campaignID").val('701a0000002Qrhq'); //

      } else if(state=="KY") {
        $("#campaignID").val('701a0000002Qrgx'); //

      } else if(state=="MI") {
        $("#campaignID").val('701a0000002QrhC'); //

      } else if(state=="MN") {
        $("#campaignID").val('701a0000002QrhM'); //

      } else if(state=="MA") {
        $("#campaignID").val('701a0000002QriF'); //

      } else if(state=="MD") {
        $("#campaignID").val('701a0000002QrhH'); //

      } else if(state=="NC") {
        $("#campaignID").val('701a0000002Qrhb'); //

      } else if(state=="NJ") {
        $("#campaignID").val('701a0000002Qrh7'); //

      } else if(state=="NV") {
      $("#campaignID").val('701a0000002QriZ'); //
      
      } else if(state=="NY") {
        $("#campaignID").val('701a0000002Qrgs'); //

      } else if(state=="WI") {
        $("#campaignID").val('701a0000002Qrh2'); //

      } else {
        $("#campaignID").val('701a0000002Qrua');

      }

    } 
  

    //AGDBoost code
  } else if (code == "agd") {
    $("#campaignID").val('701a0000002Qrhv'); 


    //OfficiteBoost code
  } else if (code == "health") {
    if (market == "Podiatry") {
      $("#campaignID").val('701a0000002Qrgn');
    
    } else if (market == "Dermatology") {
      $("#campaignID").val('701a0000002QriK');

    } else if (market == "Otolaryngology"){
      $("#campaignID").val('701a0000002Qri5');
    
    } else if (market == "Gastroenterology"){
      $("#campaignID").val('701a0000002Qrgi');

    } else if (market == "Pediatrics"){
      $("#campaignID").val('701a0000002QrhR');

    } else {
        $("#campaignID").val('701a0000002Qrua');

    }
  

    //PerioBoost code
  } else if (code == "perio"){
      $("#campaignID").val('701a0000002Qri0');

    //no code
  } else {
      $("#campaignID").val('701a0000002Qrua');

  }
}

function updateURL() {
    if(market=="Dental" || market=="Periodontology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?dental');
    } else if (market=="Aesthetic") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?aesthetic');
    } else if (market=="Cardiology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?cardio');
    } else if (market=="Dermatology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?derm');
    } else if (market=="Gastroenterology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?gastro');
    } else if (market=="Obstetrics Gynecology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?obgyn');
    } else if (market=="Otolaryngology") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?ent');
    } else if (market=="Pediatrics") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?pediatric');
    } else if (market=="Podiatry") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?podiatry');
    } else if (market=="Midwifery") {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?midwifery');
    } else {
        $("#retURL").val('http://go.officite.com/officite-invite/invite.html?medical');
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


