let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                animItem.classList.remove('_inactive');
            } else if (pageYOffset < animItemOffset - animItemHeight || pageYOffset > (animItemOffset + animItemHeight)) {
                animItem.classList.remove('_active');
                animItem.classList.add('_inactive');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

//! ////////////////////////////////////////animation header
let animItemsLogo = document.querySelectorAll('._anim-items-logo ');

if (animItemsLogo.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItemsLogo.length; index++) {
            const animItem = animItemsLogo[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active-logo');
                animItem.classList.remove('_inactive-logo');
            } else if (pageYOffset < animItemOffset - animItemHeight || pageYOffset > (animItemOffset + animItemHeight)) {
                animItem.classList.remove('_active-logo');
                animItem.classList.add('_inactive-logo');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

//! ////////////////////////////////// smoke effect cursor 
document.addEventListener('mousemove', function(e) {
    createSmoke(e.pageX, e.pageY);
});

function createSmoke(x, y) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;
    document.getElementById('smoke-container').appendChild(smoke);
    
    setTimeout(() => {
        smoke.remove();
    }, 1000);
}