
export function initContactModal() {
    const contactModal = document.getElementById('contact-modal');
    const contactTrigger = document.getElementById('contact-trigger');
    const closeContact = document.getElementById('close-contact');
    
    // Open contact modal with animation
    contactTrigger.addEventListener('click', () => {
        contactModal.classList.remove('hidden');
        gsap.from(contactModal.querySelector('div'), {
            opacity: 0,
            y: -20,
            duration: 0.3
        });
    });
    
    // Close contact modal
    closeContact.addEventListener('click', () => {
        contactModal.classList.add('hidden');
    });
} 