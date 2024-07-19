(() => {
    const scrollToTopBtn = document.querySelector(".button-up");
    let prevScrollTop = 0;

   
    const lazyLoad = () => {
        const lazyElements = document.querySelectorAll('[data-src]');
        const windowHeight = window.innerHeight;

        lazyElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            if (elementTop < windowHeight && elementBottom >= 0) {
                if (element.dataset.src) {
                    element.src = element.dataset.src;
                    element.removeAttribute('data-src');
                }
            }
        });
    };

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
            scrollToTopBtn.classList.add("_anim-items");
            scrollToTopBtn.classList.remove("_inactive");
            scrollToTopBtn.classList.toggle("scroll-down", scrollTop > prevScrollTop);
            scrollToTopBtn.classList.toggle("scroll-up", scrollTop <= prevScrollTop);
        } else {
            scrollToTopBtn.classList.add("_inactive");
            scrollToTopBtn.classList.remove("_anim-items");
            scrollToTopBtn.style.display = "none";
        }

        prevScrollTop = scrollTop;
      
        lazyLoad();
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    window.addEventListener('load', lazyLoad);
})();