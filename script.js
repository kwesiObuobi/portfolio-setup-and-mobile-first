function closeMenu() {
    document.querySelector('.mobile-nav-menu').style.display = 'none';
    document.body.style.overflow = 'scroll';
}

closeMenu();

let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
    document.querySelector('.mobile-nav-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

