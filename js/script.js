


window.onscroll = function() {
  myFunction()
};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// $(".mng").on("click", function() {

//   $("#about").toggleClass('open');
//   $("#about .aboutxt ").animate({"opacity":"1"},1599);
//   $(".mng").off("click");

// });

var mng = document.getElementById("mngf");
var abt = document.getElementById("about");
var anmt = document.getElementById("anmtabt");
var nvabt = document.getElementById("nvabt");

(nvabt,mng).onclick = function(){
  if(abt.className == "open"){
    abt.className = "";
    anmt.setAttribute("style","opacity: 0");
  }else{
    abt.className = "open";
    anmt.setAttribute("style","opacity: 1"); 
  }
};

var navop = document.getElementById("navop");
var nv = document.getElementById("nv");

navop.onclick = function(){
  nv.classList.toggle('navopen');
  navop.classList.toggle('toggle');
};