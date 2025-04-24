
const menu = document.querySelector('nav ul');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.donate-cta');

menuOpen.addEventListener('click', () => { menu.classList.add('open') });
menuClose.addEventListener('click', () => { menu.classList.remove('open') });


function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }).catch(err => {
        alert("Failed to copy: " + err);
    });
}