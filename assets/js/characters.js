document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Characters.js loaded successfully.");

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

    // ========== OVERLAY FUNCTIONS ==========
    window.openCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (!overlay) {
            console.error(`Overlay not found for ID: ${overlayId}`);
            return;
        }
        document.querySelectorAll(".character-overlay").forEach((overlay) => {
            overlay.classList.remove("visible");
        });
        overlay.classList.add("visible");
        console.log("Overlay opened:", overlayId);
    };

    window.closeCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.remove("visible");
            console.log("Overlay closed:", overlayId);
        }
    };

    // ========== BOOK SELECT ==========
    const bookSelect = document.getElementById('book-select');
    bookSelect.addEventListener('change', function () {
        if (bookSelect.value === 'book2') {
            showSpoilerWarningModal().then((confirmed) => {
                if (!confirmed) {
                    bookSelect.value = 'book1';
                }
                filterCharacters();
            });
        } else {
            filterCharacters();
        }
    });

    filterCharacters();

    function filterCharacters() {
        const selectedBook = bookSelect.value;
        document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)')
            .forEach(el => el.style.display = (selectedBook === 'book1') ? 'block' : 'none');
        document.querySelectorAll('.character-section.book2, .character-card.book2, .character-section.book2 .section-title')
            .forEach(el => el.style.display = (selectedBook === 'book2') ? 'block' : 'none');
    }

    // ========== IMAGE BEHAVIOR FOR CHARACTERS ==========
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    /**
     * Sets up image behavior for a character.
     *
     * On desktop, hover events change the image source.
     * On mobile, if toggleOnMobile is true, a click on the image toggles its source.
     * Otherwise, the card's onclick will open the overlay.
     *
     * @param {string} imageId - The ID of the image element.
     * @param {string} defaultSrc - The default image source.
     * @param {string} hoverSrc - The alternate image source.
     * @param {string} overlayId - The overlay ID to open.
     * @param {boolean} [toggleOnMobile=false] - If true, on mobile devices clicking the image toggles its source.
     */
    function setupCharacterImageBehavior(imageId, defaultSrc, hoverSrc, overlayId, toggleOnMobile = false) {
        const image = document.getElementById(imageId);
        if (!image) return;
        image.src = defaultSrc;

        if (isTouchDevice) {
            if (toggleOnMobile) {
                // On mobile, clicking the image toggles its source.
                image.addEventListener("click", function(e) {
                    e.stopPropagation(); // Prevent the card's click event from firing.
                    if (image.getAttribute("src") === defaultSrc) {
                        image.src = hoverSrc;
                    } else {
                        image.src = defaultSrc;
                    }
                });
            }
            // For mobile devices without toggleOnMobile enabled,
            // tapping the card (including the image) will trigger the card's onclick.
        } else {
            // Desktop behavior: use hover effects for all characters.
            image.addEventListener("mouseenter", function () {
                image.src = hoverSrc;
            });
            image.addEventListener("mouseleave", function () {
                image.src = defaultSrc;
            });
        }
    }

    // Set up image behavior for all characters.

    // Faye: Mobile image toggling enabled.
    setupCharacterImageBehavior(
        "faye-image", 
        "assets/images/characters/Faye/Faye.webp", 
        "assets/images/characters/Faye/Faye2.png", 
        "faye-overlay", 
        true
    );
    
    // Aeryn: Mobile image toggling enabled.
    setupCharacterImageBehavior(
        "aeryn-image", 
        "assets/images/characters/Aeryn/Aeryn.jpg", 
        "assets/images/characters/Aeryn/Aeryn2.png", 
        "aeryn2-overlay", 
        true
    );
    
    // Eden: Mobile image toggling enabled.
    setupCharacterImageBehavior(
        "eden-image", 
        "assets/images/characters/Eden/Eden.webp", 
        "assets/images/characters/Eden/Eden2.webp", 
        "eden2-overlay", 
        true
    );
    
    // Blaine: Mobile image toggling enabled.
    setupCharacterImageBehavior(
        "blaine-image", 
        "assets/images/characters/Blaine/Blaine.webp", 
        "assets/images/characters/Blaine/Blaine2.webp", 
        "blaine-overlay", 
        true
    );
});
