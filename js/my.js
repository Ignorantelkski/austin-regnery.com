$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.hero-pic').fadeIn();
    } else {
        $('.hero-pic').fadeOut();
    }
});

$('.trigger').click(function() {
  $('.about-me, .home-page').toggleClass('hide');
});
