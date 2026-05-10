document.addEventListener('DOMContentLoaded', function () {
    const slidesBtn = document.getElementById('slides');
    const mobileMenu = document.getElementById('mobile-menu');

    slidesBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
});

// ── HERO SLIDER ──
const heroSlides = [
    'bike/bike4.png',
    'bike/bike1.png',
    'bike/bike2.png'
];

let currentSlide = 0;
let sliderInterval;

function goToSlide(index) {
    const img = document.getElementById('hero-img');

    // fade out
    img.style.opacity = '0';

    setTimeout(() => {
        currentSlide = index;
        img.src = heroSlides[currentSlide];

        // fade in
        img.style.opacity = '1';

        // update dots
        document.querySelectorAll('.hero-dots span').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }, 400);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;  // ← heroSlides
    goToSlide(currentSlide);
}

sliderInterval = setInterval(nextSlide, 3000);

document.querySelector('.hero').addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
});

document.querySelector('.hero').addEventListener('mouseleave', () => {
    sliderInterval = setInterval(nextSlide, 3000);
});
