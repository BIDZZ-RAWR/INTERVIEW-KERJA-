document.addEventListener('DOMContentLoaded', () => {
    const qaCards = document.querySelectorAll('.qa-card');
    qaCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '1';
    });
});