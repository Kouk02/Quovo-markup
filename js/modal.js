(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('hidden-menu');
        document.body.classList.toggle('no-scroll');
    }
})();


document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('[data-menu-open]');
  const modalWindow = document.querySelector('[data-menu]');
  const closeButton = modalWindow.querySelector('.button-window-menu-close');
  
  openButton.addEventListener('click', () => {
    modalWindow.classList.remove('hidden-menu'); 
    document.body.classList.add('no-scroll'); 
  });
  
  closeButton.addEventListener('click', () => {
    modalWindow.classList.add('hidden-menu'); 
    document.body.classList.remove('no-scroll'); 
  });
});
