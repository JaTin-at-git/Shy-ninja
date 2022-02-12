//change the navbar background on certail scroll
$(window).scroll(function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;

    if (window.innerWidth > 900) {
        if (y_scroll_pos > scroll_pos_test) {
            $(".navbar").css("background-color", "var(--color-dark)");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    }
});
