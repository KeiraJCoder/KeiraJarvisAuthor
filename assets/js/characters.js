document.addEventListener("DOMContentLoaded", function () {
    // ========== MODAL ELEMENTS ==========
    const spoilerModal = document.getElementById("spoilerModal");
    const yesBtn = document.getElementById("spoilerYesBtn");
    const noBtn = document.getElementById("spoilerNoBtn");

    // A helper function that displays the spoiler modal and returns a Promise
    function showSpoilerWarningModal() {
        spoilerModal.style.display = "flex"; // Show the modal
        return new Promise((resolve) => {
            yesBtn.onclick = () => {
                spoilerModal.style.display = "none";
                resolve(true);
            };
            noBtn.onclick = () => {
                spoilerModal.style.display = "none";
                resolve(false);
            };
        });
    }

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

    // ========== BOOK SELECT ========== 
    const bookSelect = document.getElementById('book-select');
    bookSelect.addEventListener('change', function () {
        if (bookSelect.value === 'book2') {
            // Instead of confirm(), show the custom modal
            showSpoilerWarningModal().then((confirmed) => {
                if (!confirmed) {
                    // If user cancels, revert to Book 1
                    bookSelect.value = 'book1';
                }
                filterCharacters();
            });
        } else {
            // If not Book 2, just filter as usual
            filterCharacters();
        }
    });

    // ========== FILTER CHARACTERS FUNCTION ========== 
    filterCharacters(); // Set default state on initial page load

    function filterCharacters() {
        const selectedBook = bookSelect.value;

        // Toggle Book 1 elements
        const book1Elements = document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)');
        book1Elements.forEach(el => {
            el.style.display = (selectedBook === 'book1') ? 'block' : 'none';
        });

        // Toggle Book 2 elements
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
});

document.addEventListener("DOMContentLoaded", function() {
    const fayeImage = document.getElementById("faye-image");

    // On hover, change the image
    fayeImage.addEventListener("mouseenter", function() {
        fayeImage.src = "assets/images/characters/Faye/Faye2.webp";
    });

    // When the hover ends, revert to the original image
    fayeImage.addEventListener("mouseleave", function() {
        fayeImage.src = "assets/images/characters/Faye/Faye.webp";
    });
});

