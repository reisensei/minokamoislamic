const menu = document.querySelector('nav ul');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.donate-cta');

menuOpen.addEventListener('click', () => { menu.classList.add('open') });
menuClose.addEventListener('click', () => { menu.classList.remove('open') });
