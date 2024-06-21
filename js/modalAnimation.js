let openMenuBtn = document.querySelector('[data-menu-open]');
let closeMenuBtn = document.querySelector('[data-menu-close]');
let menuModal = document.querySelector('[data-menu]');
let animItemLogo = document.querySelectorAll('._anim-items-logo');
let animItem = document.querySelectorAll('._anim-items');

// Функція для додавання класів анімації
function addAnimationClasses() {
    animItemLogo.forEach(item => {
        item.classList.add('_active-logo');
        item.classList.remove('_inactive-logo');
    });
    animItem.forEach(item => {
        item.classList.add('_active');
        item.classList.remove('_inactive');
    });
}

// Функція для видалення класів анімації
function removeAnimationClasses() {
    animItemLogo.forEach(item => {
        item.classList.remove('_active-logo');
        item.classList.add('_inactive-logo');
    });
    animItem.forEach(item => {
        item.classList.remove('_active');
        item.classList.add('_inactive');
    });
}

// Обробник події для відкриття меню
openMenuBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці кнопки
    menuModal.classList.remove('hidden-menu');
    addAnimationClasses(); // Запускаємо анімацію одразу після відкриття меню
});

// Обробник події для закриття меню
closeMenuBtn.addEventListener('click', () => {
    removeAnimationClasses();
    // Затримка перед приховуванням меню, щоб анімація встигла відпрацювати
    setTimeout(() => {
        menuModal.classList.add('hidden-menu');
    }, 800); // 800ms відповідає тривалості анімації в CSS
});
function addAnimationClasses() {
    console.log('Adding animation classes');
    // ... решта коду
}

function removeAnimationClasses() {
    console.log('Removing animation classes');
    // ... решта коду
}
// Ініціалізація: встановлюємо початковий стан
removeAnimationClasses();