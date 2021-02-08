


window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



$(".mng").on("click", function() {

  $("#about").toggleClass('open');
  $("#about .aboutxt ").animate({"opacity":"1"},1599);
  $(".mng").off("click");

});
