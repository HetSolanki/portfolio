const close_menu = document.querySelector('.close');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav__list')
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    close_menu.classList.add('close-visible');
    menu.classList.add('menu-hidden');
    nav.classList.add('nav-visible');
    body.classList.add('no-scroll');
})

close_menu.addEventListener('click', () => {
    close_menu.classList.remove('close-visible');
    menu.classList.remove('menu-hidden');
    nav.classList.remove('nav-visible');
    body.classList.remove('no-scroll');
})

nav.addEventListener('click', ()=>{
    close_menu.classList.remove('close-visible');
    menu.classList.remove('menu-hidden');
    nav.classList.remove('nav-visible');
    body.classList.remove('no-scroll');
})