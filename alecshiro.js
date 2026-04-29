document.addEventListener('DOMContentLoaded', function() {
    const slides = document.getElementById('slides');
    const mobileMenu = document.getElementById('mobile-menu');

    slides.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
});
