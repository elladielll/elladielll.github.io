const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    over = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
over.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.habits__level__item-persent'),
    lines = document.querySelectorAll('.habits__level__item-inside');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
});

