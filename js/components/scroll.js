const isVisible = (tagPosition, pageBottom) => tagPosition < pageBottom;
const toggleVisible = pageBottom => tag => {
    const tagPosition = $(tag).position().top;
    $(tag).toggleClass("visible", isVisible(tagPosition, pageBottom));
}

$(document).on("scroll", function () {
    const pageTop = $(document).scrollTop()
    const pageBottom = pageTop + $(window).height()
    var tags = $("section").get()

    tags.map(toggleVisible(pageBottom));
})