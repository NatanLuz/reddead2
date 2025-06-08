window.addEventListener("scroll", function() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.classList.add('fadeIn');
        }
    });
});

// Smooth scroll para links de navegação facilitando acesso

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Efeito de parallax no hero 

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const limit = hero.offsetTop + hero.offsetHeight;
    
    if (scrolled <= limit) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Navbar transparente que muda de cor ao rolar

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.5)';
    }
});

// Animação de ''fade in'' para os elementos quando entram na 'viewport'
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section > *').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

//por mais que nao desenvolva com js utilizar esses elementos, codigo em si foi essencial para a construçao do site xd

// Menu com animação suave
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Fecha o menu ao clicar em um link ou fora dele
document.addEventListener('click', function(e) {
    const isMenuClick = menuToggle.contains(e.target);
    const isNavClick = navLinks.contains(e.target);
    
    if (!isMenuClick && !isNavClick && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        body.style.overflow = '';
    }
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        body.style.overflow = '';
    });
});

// Ajusta o menu ao redimensionar a janela
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    }, 250);
});


