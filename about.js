// Intersection Observer for animation
const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('.about-image');
            const text = entry.target.querySelector('.text-content');

            // Check if the animation has already been triggered
            if (!entry.target.classList.contains('animated')) {
                if (entry.target.classList.contains('reverse')) {
                    text.classList.add('animate-left');
                    img.classList.add('animate-right');
                } else {
                    img.classList.add('animate-left');
                    text.classList.add('animate-right');
                }
                // Mark this section as animated
                entry.target.classList.add('animated');
            }
        }
    });
});

// Observe the about sections
document.querySelectorAll('.about-section').forEach(section => {
    observer.observe(section);
});
