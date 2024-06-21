// Отримуємо необхідні елементи
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const menuModal = document.querySelector('[data-menu]');
const animItemsLogo = document.querySelectorAll('._anim-items-logo');
const animItems = document.querySelectorAll('._anim-items');

// Функція для додавання класів анімації
function addAnimationClasses() {
    animItemsLogo.forEach(item => {
        item.classList.add('_active-logo');
        item.classList.remove('_inactive-logo');
    });
    animItems.forEach(item => {
        item.classList.add('_active');
        item.classList.remove('_inactive');
    });
}

// Функція для видалення класів анімації
function removeAnimationClasses() {
    animItemsLogo.forEach(item => {
        item.classList.remove('_active-logo');
        item.classList.add('_inactive-logo');
    });
    animItems.forEach(item => {
        item.classList.remove('_active');
        item.classList.add('_inactive');
    });
}

// Обробник події для відкриття меню
openMenuBtn.addEventListener('click', () => {
    menuModal.classList.remove('hidden-menu');
    setTimeout(addAnimationClasses, 10); // Невелика затримка для гарантії, що CSS-перехід спрацює
});

// Обробник події для закриття меню
closeMenuBtn.addEventListener('click', () => {
    removeAnimationClasses();
    // Затримка перед приховуванням меню, щоб анімація встигла відпрацювати
    setTimeout(() => {
        menuModal.classList.add('hidden-menu');
    }, 800); // 800ms відповідає тривалості анімації в CSS
});

// Ініціалізація: встановлюємо початковий стан
removeAnimationClasses();