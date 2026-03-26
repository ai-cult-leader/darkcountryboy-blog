// Dark Country Boy Blog JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dark Country Boy Blog Loaded!');

    // Example: Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
