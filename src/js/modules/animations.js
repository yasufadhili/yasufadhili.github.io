
export function initAnimations() {
    // Initialize GSAP animations
    gsap.from('#main-heading', { 
        opacity: 0, 
        y: -20, 
        duration: 0.8, 
        ease: "power2.out" 
    });
    
    gsap.from('yf-cta-links', { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        delay: 0.3, 
        ease: "power2.out" 
    });
} 