// Pivot Aide - JavaScript Functionality

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pivot Aide loaded successfully!');
    
    // Initialize all features
    initSmoothScrolling();
    initAnimations();
    initFeatureCards();
    displayWelcomeMessage();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll-based animations
 */
function initAnimations() {
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
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Add interactive hover effects to feature cards
 */
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

/**
 * Display welcome message in console
 */
function displayWelcomeMessage() {
    console.log(`
    ╔═══════════════════════════════════════╗
    ║       Welcome to Pivot Aide!          ║
    ║                                       ║
    ║  This is a template implementation.   ║
    ║  Replace this code with your actual   ║
    ║  project functionality.               ║
    ║                                       ║
    ║  Live app: pivot-aide.lovable.app    ║
    ╚═══════════════════════════════════════╝
    `);
}

/**
 * Example: Form validation function
 * Add this when you have forms to validate
 */
function validateForm(formData) {
    const errors = [];
    
    // Add your validation logic here
    if (!formData.email || !formData.email.includes('@')) {
        errors.push('Valid email is required');
    }
    
    return errors;
}

/**
 * Example: API call function
 * Replace with your actual API endpoints
 */
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

/**
 * Example: Local storage helper functions
 */
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    }
};

// Export functions for use in other modules (if using ES6 modules)
// export { validateForm, fetchData, Storage };
