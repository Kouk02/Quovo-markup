document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.your-element');
  const fadeInLeft = 'animate__fadeInLeft';
  const fadeOutRight = 'animate__fadeOutRight';

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(element)) {
      element.classList.add(fadeInLeft);
      element.classList.remove(fadeOutRight);
    } else {
      element.classList.remove(fadeInLeft);
      element.classList.add(fadeOutRight);
    }
  }

  window.addEventListener('scroll', handleScroll);
});