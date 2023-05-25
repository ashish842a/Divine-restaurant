function myFunction() {
    var x = document.getElementById("menunav");
    if (x.className === "menu-nav") {
      x.className += " responsive";
    } else {
      x.className = "menu-nav";
    }
  }
  document.querySelector(".btn").addEventListener("click",function(dets) {
      console.log(dets);
  })
document.addEventListener("DOMContentLoaded", function(event) { 
  var scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
  localStorage.setItem('scrollpos', window.scrollY);
};
