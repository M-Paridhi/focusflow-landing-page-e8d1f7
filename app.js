document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    hamburger?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Scroll-based navbar shadow
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Simple fade-in animation on scroll for sections
    document.querySelectorAll('.fade-in-section').forEach(el => {
        new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }).observe(el);
    });

    // Simple form handling
    document.querySelector('#contact-form')?.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Form submitted!');
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    });
});