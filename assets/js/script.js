function toggleMenu() {
    var menu = document.querySelector('.menu');
    var overlay = document.querySelector('.menu-overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
}