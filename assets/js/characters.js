document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Characters.js loaded successfully.");

    // ==============================
    // 📌 1. SPOILER WARNING MODAL
    // ==============================
    const spoilerModal = document.getElementById("spoilerModal");
    const yesBtn = document.getElementById("spoilerYesBtn");
    const noBtn = document.getElementById("spoilerNoBtn");

    // Function to show spoiler warning modal and return a Promise
    function showSpoilerWarningModal() {
        spoilerModal.style.display = "flex"; // Show modal
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

    // ==============================
    // 📌 2. CHARACTER OVERLAY FUNCTIONS
    // ==============================

    // Function to open a character's overlay
    window.openCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (!overlay) {
            console.error(`Overlay not found for ID: ${overlayId}`);
            return;
        }

        // Hide all other overlays before opening a new one
        document.querySelectorAll(".character-overlay").forEach((overlay) => {
            overlay.classList.remove("visible");
        });

        // Show the selected overlay
        overlay.classList.add("visible");
        console.log("Overlay opened:", overlayId);
    };

    // Function to close a character's overlay
    window.closeCharacterOverlay = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.remove("visible");
            console.log("Overlay closed:", overlayId);
        }
    };

    // ==============================
    // 📌 3. BOOK SELECTION FILTER
    // ==============================
    const bookSelect = document.getElementById('book-select');

    bookSelect.addEventListener('change', function () {
        if (bookSelect.value === 'book2') {
            showSpoilerWarningModal().then((confirmed) => {
                if (!confirmed) {
                    bookSelect.value = 'book1'; // Revert selection if declined
                }
                filterCharacters();
            });
        } else {
            filterCharacters();
        }
    });

    // Function to filter characters based on selected book
    function filterCharacters() {
        const selectedBook = bookSelect.value;

        // Toggle visibility of Book 1 elements
        document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)')
            .forEach(el => el.style.display = (selectedBook === 'book1') ? 'block' : 'none');

        // Toggle visibility of Book 2 elements
        document.querySelectorAll('.character-section.book2, .character-card.book2, .character-section.book2 .section-title')
            .forEach(el => el.style.display = (selectedBook === 'book2') ? 'block' : 'none');

        console.log("Characters filtered for:", selectedBook);
    }

    // Run the filter on initial page load
    filterCharacters();

    // ==============================
    // 📌 4. IMAGE BEHAVIOR (DESKTOP & MOBILE)
    // ==============================
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    function setupCharacterImageBehavior(imageId, defaultSrc, hoverSrc, overlayId) {
        const image = document.getElementById(imageId);
        if (!image) return;
        image.src = defaultSrc;

        if (isTouchDevice) {
            // 📌 MOBILE FUNCTIONALITY: Toggle Image on Click & Retain Overlay Functionality
            let toggled = false;
            const characterCard = document.querySelector(`.character-card[onclick*='${overlayId}']`);
            if (characterCard) {
                characterCard.removeAttribute("onclick"); // Remove overlay opening on click

                characterCard.addEventListener("click", function () {
                    toggled = !toggled;
                    image.src = toggled ? hoverSrc : defaultSrc;
                    setTimeout(() => openCharacterOverlay(overlayId), 500); // Delay overlay opening
                });
            }
        } else {
            // 📌 DESKTOP FUNCTIONALITY: Hover Effect to Swap Image
            image.addEventListener("mouseenter", function () {
                image.src = hoverSrc;
            });
            image.addEventListener("mouseleave", function () {
                image.src = defaultSrc;
            });
        }
    }

    // 🔽 SETUP CHARACTER IMAGE BEHAVIOR FOR EACH CHARACTER 🔽
    setupCharacterImageBehavior("faye-image", "assets/images/characters/Faye/Faye.webp", "assets/images/characters/Faye/Faye2.png", "faye-overlay");
    setupCharacterImageBehavior("aeryn-image", "assets/images/characters/Aeryn/Aeryn.jpg", "assets/images/characters/Aeryn/Aeryn2.png", "aeryn-overlay");
    setupCharacterImageBehavior("eden-image", "assets/images/characters/Eden/Eden.webp", "assets/images/characters/Eden/Eden2.webp", "eden-overlay");
    setupCharacterImageBehavior("blaine-image", "assets/images/characters/Blaine/Blaine.webp", "assets/images/characters/Blaine/Blaine2.webp", "blaine-overlay");

    console.log("✅ Image behavior configured for desktop & mobile.");
});
