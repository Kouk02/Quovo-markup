let scrollToTopBtn = document.querySelector(".button-up");
let prevScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.classList.add("_anim-items");
        scrollToTopBtn.classList.remove("_inactive");

        if (scrollTop > prevScrollTop) {
            scrollToTopBtn.classList.add("scroll-down");
            scrollToTopBtn.classList.remove("scroll-up");
        } else {
            scrollToTopBtn.classList.add("scroll-up");
            scrollToTopBtn.classList.remove("scroll-down");
        }
    } else {
        scrollToTopBtn.classList.add("_inactive");
        scrollToTopBtn.classList.remove("_anim-items");
        scrollToTopBtn.style.display = "none";
    }

    prevScrollTop = scrollTop;
}