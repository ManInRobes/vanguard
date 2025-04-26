// Specifically for handling mobile phone inputs, Needed to look this up
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownContainer = document.querySelector('.dropdown');

    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from immediately triggering the document click listener
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true' || false;
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
        dropdownContainer.classList.toggle('open');
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownContainer.contains(event.target)) {
            dropdownContainer.classList.remove('open');
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    });
});