

var navop = document.getElementById("navop");
var nv = document.getElementById("nv");

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
  };
}
navfunction();


// end nav

// contact 
function contfunction(){

  contact.onclick = function() {
    nv.classList.remove('navopen');
    navop.classList.remove('toggle');
  };

}


function mcontfunction(){

  contact.onclick = function() {
    nv.classList.remove('navopen');
    navop.classList.remove('toggle');
  };

}
// end of contact


try {
  contfunction(); 
} catch (error) {
  
}
finally{
  mcontfunction(); 
}







