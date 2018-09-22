$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.hero-pic').fadeIn();
    } else {
        $('.hero-pic').fadeOut();
    }
});
