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
});

// ==========================
// IMAGE BEHAVIOR FOR CHARACTERS
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    function setupCharacterImageBehavior(imageId, defaultSrc, hoverSrc, overlayId) {
        const image = document.getElementById(imageId);
        if (!image) return;
        image.src = defaultSrc;

        if (isTouchDevice) {
            const characterCard = document.querySelector(`.character-card[onclick*='${overlayId}']`);
            if (characterCard) {
                characterCard.removeAttribute("onclick");
                characterCard.addEventListener("click", function () {
                    image.src = hoverSrc;
                    setTimeout(() => openCharacterOverlay(overlayId), 500);
                });
            }
        } else {
            image.addEventListener("mouseenter", function () {
                image.src = hoverSrc;
            });
            image.addEventListener("mouseleave", function () {
                image.src = defaultSrc;
            });
        }
    }

    setupCharacterImageBehavior("faye-image", "assets/images/characters/Faye/Faye.webp", "assets/images/characters/Faye/Faye2.png", "faye-overlay");
    setupCharacterImageBehavior("aeryn-image", "assets/images/characters/Aeryn/Aeryn.jpg", "assets/images/characters/Aeryn/Aeryn2.png", "aeryn-overlay");
    setupCharacterImageBehavior("eden-image", "assets/images/characters/Eden/Eden.webp", "assets/images/characters/Eden/Eden2.webp", "eden-overlay");
    setupCharacterImageBehavior("blaine-image", "assets/images/characters/Blaine/Blaine.webp", "assets/images/characters/Blaine/Blaine2.webp", "blaine-overlay");
});
