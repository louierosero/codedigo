// Getting the Latest Year
document.getElementById("year").innerHTML = new Date().getFullYear();

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    fade: true
  });
});
