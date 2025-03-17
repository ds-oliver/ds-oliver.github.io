// assets/js/custom.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Custom JS loaded!');

    // Set initial gradient shift
    document.documentElement.style.setProperty('--gradient-shift', '0%');

    // Update gradient shift on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY / document.body.scrollHeight;
        document.documentElement.style.setProperty('--gradient-shift', `${scrollPos * 100}%`);
    });

    // Optional: Dark mode toggle (if you have a button with id="toggle-mode")
    const toggleModeButton = document.getElementById('toggle-mode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Trigger scroll event to update gradient immediately
            window.dispatchEvent(new Event('scroll'));
        });
    }
});