// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            card.classList.remove('active');
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.add('active');
            }
        });
    });
});
