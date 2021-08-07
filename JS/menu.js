const icon_menu = document.getElementById('icon-menu');
const nav = document.getElementById('nav');

icon_menu.addEventListener('click', () => {
    nav.classList.toggle('move-menu');    
});