// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

document.querySelectorAll("a").forEach(function(current) {
    if(!current.hash) return;
    if(current.origin + current.pathname != self.location.href) return;
    (function(anchorPoint) {
      if(anchorPoint) {
        current.addEventListener("click", function(e) {
          anchorPoint.scrollIntoView({behavior: "smooth"});
          e.preventDefault();
        }, false);
      }
    })(document.querySelector(current.hash));
  });