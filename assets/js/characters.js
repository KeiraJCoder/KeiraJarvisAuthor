document.addEventListener("DOMContentLoaded", function () {
    // Function to open a specific character's overlay
    window.openCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (!overlay) {
            console.error(`Overlay not found for ID: ${overlayId}`);
            return;
        }

        // Ensure only one overlay is visible at a time
        document.querySelectorAll(".character-overlay").forEach((overlay) => {
            overlay.classList.remove("visible");
        });

        // Show the correct overlay
        overlay.classList.add("visible");
    };

    // Function to close a specific character's overlay
    window.closeCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.remove("visible");
        }
    };

    // Filter characters based on selected book
    const bookSelect = document.getElementById('book-select');
    bookSelect.addEventListener('change', filterCharacters);
});

function filterCharacters() {
    const selectedBook = document.getElementById('book-select').value;
    // Show or hide Book 1 sections
    const book1Sections = document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)');
    book1Sections.forEach(el => {
        if (selectedBook === 'book1') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
    // Show or hide Book 2 sections
    const book2Sections = document.querySelectorAll('.character-section.book2, .character-card.book2, .section-title.book2');
    book2Sections.forEach(el => {
        if (selectedBook === 'book2') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}
