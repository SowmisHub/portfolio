// ===== TYPING ANIMATION =====
const typingText = document.getElementById('typing');
const roles = ['MERN Stack Developer', 'Full Stack Web Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

function typeAnimation() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeAnimation, speed);
}

// Start typing animation
typeAnimation();

// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check on page load
revealOnScroll();



console.log('Portfolio website loaded successfully!');
