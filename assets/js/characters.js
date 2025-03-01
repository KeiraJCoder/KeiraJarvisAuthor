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

    // Set up the book selection change event with a single confirmation prompt for Book 2
    const bookSelect = document.getElementById('book-select');
    bookSelect.addEventListener('change', function () {
         if (bookSelect.value === 'book2') {
             // Ask for confirmation once when switching to Book 2
             if (!confirm("Warning: This section contains spoilers. Are you sure you want to continue?")) {
                 // If the user cancels, revert to Book 1
                 bookSelect.value = 'book1';
             }
         }
         filterCharacters();
    });

    // Set default state on initial page load (show only Book 1)
    filterCharacters();
});

function filterCharacters() {
    const selectedBook = document.getElementById('book-select').value;
    
    // Toggle Book 1 elements
    const book1Elements = document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)');
    book1Elements.forEach(el => {
        el.style.display = (selectedBook === 'book1') ? 'block' : 'none';
    });
    
    // Toggle Book 2 elements (selecting section titles as descendants of .character-section.book2)
    const book2Elements = document.querySelectorAll('.character-section.book2, .character-card.book2, .character-section.book2 .section-title');
    book2Elements.forEach(el => {
        el.style.display = (selectedBook === 'book2') ? 'block' : 'none';
    });
    
    // Update the heading text for the visible section based on selected book
    if (selectedBook === 'book1') {
        const heading = document.querySelector('.character-section.book1 .book-section');
        if (heading) {
            heading.textContent = "MEMOIRS OF A VAMPYR’S DAUGHTER: EDEN";
        }
    } else if (selectedBook === 'book2') {
        const heading = document.querySelector('.character-section.book2 .book-section');
        if (heading) {
            heading.textContent = "MEMOIRS OF A VAMPYR’S DAUGHTER: WISDOM";
        }
    }
}
