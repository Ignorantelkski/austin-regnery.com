$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
    //     $('.hero-pic').fadeIn();
    // } else {
    //     $('.hero-pic').fadeOut();
    // }
    // $('.hero-pic').attr("style", "animation: fadein 3s");
    // } else {
    // $('.hero-pic').attr("style", "animation: fadeout 3s");
    }
});

$('.trigger').click(function() {
  $('.about-me, .home-page').toggleClass('hide');
});

$(function() {
    $('body').removeClass('fade-out');
});
