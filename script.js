let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});