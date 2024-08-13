document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        const heroImage = heroSection.querySelector('.hero-image img');

        if (heroImage) {
            // Add zoom-in effect on hover for the image only
            heroSection.addEventListener('mouseover', () => {
                heroImage.style.transform = 'scale(1.1)'; // Zoom in
            });

            heroSection.addEventListener('mouseout', () => {
                heroImage.style.transform = 'scale(1)'; // Reset zoom
            });
        }
    }
});
