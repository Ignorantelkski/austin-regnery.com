//for cross-browser support
$('.about-trigger').click(function() {
    window.location.hash = "jump";
  });

$('.scroll-to-top-trigger').click(function() {
  jQuery('html,body').animate({scrollTop:0},0);
});
