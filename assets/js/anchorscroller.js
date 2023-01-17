// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function(e) {
  var links = document.getElementsByTagName("A");
  for(var i=0; i < links.length; i++) {
    if(!links[i].hash) continue;
    if(links[i].origin + links[i].pathname != self.location.href) continue;
    (function(anchorPoint) {
      links[i].addEventListener("click", function(e) {
        if(anchorPoint) anchorPoint.scrollIntoView({behavior: "smooth"});
        e.preventDefault();
      }, false);
    })(document.getElementById(links[i].hash.replace(/#/, "")));
  }
});