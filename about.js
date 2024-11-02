// Load Header and Footer
async function loadContent() {
    const headerResponse = await fetch("header.html");
    const footerResponse = await fetch("footer.html");
    document.getElementById("header").innerHTML = await headerResponse.text();
    document.getElementById("footer").innerHTML = await footerResponse.text();
}
loadContent();

// Intersection Observer for about section animation
const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const aboutObserver = new IntersectionObserver((entries) => {
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
    aboutObserver.observe(section);
});

// Intersection Observer for timeline animation
document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust as needed
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.classList.add('animated');

                // Add specific animation classes
                if (item.classList.contains('left')) {
                    item.classList.add('animate-left');
                } else {
                    item.classList.add('animate-right');
                }
                
                timelineObserver.unobserve(item); // Stop observing after animation
            }
        });
    }, timelineObserverOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});
