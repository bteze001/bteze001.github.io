const video = document.getElementById('video-collegecompass');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function updateNav() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 20);

    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (scrollY >= top)
            current = sec.id;
    });

    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    });
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

revealEls.forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const top = target.offsetTop - 58;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

let konamiBuffer = [];
const TERMINAL_KEY = '`';
document.addEventListener('keydown', e => {
    if (e.key === TERMINAL_KEY) {
        const tip = document.createElement('div');
        tip.textContent = '⌨ Terminal mode coming soon...';
        tip.style.cssText = `
        position:fixed;bottom:24px;right:24px;z-index:999;
        background:#2C2622;color:#FAF9F6;
        font-family:'JetBrains Mono',monospace;
        font-size:12px;padding:10px 16px;
        border-radius:8px;opacity:0;
        transition:opacity 0.3s;pointer-events:none;
      `;
        document.body.appendChild(tip);
        requestAnimationFrame(() => tip.style.opacity = '1');
        setTimeout(() => {
            tip.style.opacity = '0';
            setTimeout(() => tip.remove(), 300);
        }, 2200);
    }
});

if (video) {
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 5) {
            video.currentTime = 0;
        }
    });
}

document.querySelectorAll('.chart-slideshow').forEach(slideshow => {
    const folder = slideshow.dataset.folder;
    const count = parseInt(slideshow.dataset.images);

    for (let i = 1; i <= count; ++i) {
        const img = document.createElement('img');
        img.src = `${folder}/slide${i}.png`;
        img.alt = `Project Image ${i}`;
        if (i === 1) img.classList.add('active');
        slideshow.appendChild(img);
    }

    let current = 0;
    const images = slideshow.querySelectorAll('img');

    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 2500);
});