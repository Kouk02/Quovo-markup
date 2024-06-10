let scrollToTopBtn = document.querySelector(".button-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
        setTimeout(() => {
            scrollToTopBtn.classList.add("_anim-items");
            scrollToTopBtn.classList.remove("_inactive");
        }, 10); 
    } else {
        scrollToTopBtn.classList.add("_inactive");
        scrollToTopBtn.classList.remove("_anim-items");
        setTimeout(() => {
            scrollToTopBtn.style.display = "none";
        }, 800); 
    }
}


function scrollToTop() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE та Opera
}