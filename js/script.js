

var navop = document.getElementById("navop");
var nv = document.getElementById("nv");
var boD = document.getElementById("bo-d");
var mboD = document.getElementById("mbo-d");

var contact = document.getElementById("cntac");


var mng = document.getElementById("mngf");
var abt = document.getElementById("about");
var anmt = document.getElementById("anmtabt");
var nvabt = document.getElementById("nvabt");

function abtfunction() {
  mng.onclick = function() {
    if(abt.className == "open"){
      abt.className = "";
      anmt.setAttribute("style","opacity: 0");
    }else{
      abt.className = "open";
      anmt.setAttribute("style","opacity: 1"); 
    }
  };
  
}


// nav
function navfunction() {

  navop.onclick = function(){

    nv.classList.toggle('navopen');
    navop.classList.toggle('toggle');
    try{
      boD.classList.toggle('boD');
    }catch(e){

    }finally{
      mboD.classList.toggle('mboD');
    }
    
    
  };
}
navfunction();


// end nav




// background nav onclick
function boDfunction() {
  
  boD.onclick = function() {
  nv.classList.remove('navopen');
  navop.classList.remove('toggle');

  boD.classList.remove('boD');
};
}

function mboDfunction() {

  mboD.onclick = function() {
  nv.classList.remove('navopen');
  navop.classList.remove('toggle');

  mboD.classList.remove('mboD');
};
}

try {
  abtfunction();
  boDfunction();
  contfunction(); 
} catch (error) {
  
}
finally{
  mboDfunction();
  mcontfunction(); 
}
// end background nav onclick


// contact 
function contfunction(){

  contact.onclick = function() {
    nv.classList.remove('navopen');
    navop.classList.remove('toggle');

    boD.classList.remove('boD');
  };

}


function mcontfunction(){

  contact.onclick = function() {
    nv.classList.remove('navopen');
    navop.classList.remove('toggle');

    mboD.classList.remove('mboD');
  };

}
// end of contact




