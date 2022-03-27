
const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const nav = header.querySelector('.header__nav');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger_open');
    nav.classList.toggle('header__nav_active');
})
