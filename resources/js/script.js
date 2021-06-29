$(document).ready(function() {

/* Sticky Navigation*/
  $("js--section-features").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass(".sticky");
    } else {
      $("nav").removeClass("sticky");

    }
  });

/* Scroll on buttons*/
$("js--scroll-to-plan").click(function() {
  $("html, body").animate({scrollTop: $("section-plans").offset().top}, 1000);



})

});
