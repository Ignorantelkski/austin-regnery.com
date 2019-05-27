//for cross-browser support
$('.about-trigger').click(function() {
    window.location.hash = "jump";
  });

$('.scroll-to-top-trigger').click(function() {
  jQuery('html,body').animate({scrollTop:0},0);
});

//fade on scroll
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) { 
      $(tag).addClass("visible")
    }  else {
      $(tag).removeClass("visible")
    }
  }
})