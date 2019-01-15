
$('.about-trigger').click(function() {
  $('.about-me, .home-page').toggleClass('hide');
  $('body').toggleClass('border');
});

$('.case-1-trigger').click(function() {
  $('.shield, .home-page').toggleClass('hide');
  $('body').toggleClass('border');
});

$(function() {
    $('body').removeClass('fade-out');
});
