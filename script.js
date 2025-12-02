// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };
    
    console.log('Form submitted:', formData);
    
    // Show success message (you can replace this with actual form submission)
    alert('Спасибо за заявку! Наш менеджер свяжется с вами в ближайшее время.');
    
    // Reset form
    this.reset();
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Catalog card hover effects
document.querySelectorAll('.catalog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.catalog-image-wrapper img').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.catalog-image-wrapper img').style.transform = 'scale(1)';
    });
});

// Benefit card hover effects
document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.benefit-icon').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.benefit-icon').style.transform = 'scale(1)';
    });
});

// Step icon hover effects
document.querySelectorAll('.step-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.step-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.step-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Newsletter form handler
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        alert('Спасибо за подписку!');
        this.reset();
    });
});

// Add loading animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Add active state to navigation on scroll (if you add navigation later)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
