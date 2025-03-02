document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Characters.js loaded successfully.");

    // ==============================
    // 📌 1. SPOILER WARNING MODAL
    // ==============================
    const spoilerModal = document.getElementById("spoilerModal");
    const yesBtn = document.getElementById("spoilerYesBtn");
    const noBtn = document.getElementById("spoilerNoBtn");

    function showSpoilerWarningModal() {
        spoilerModal.style.display = "flex";
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

    // ==============================
    // 📌 3. BOOK SELECTION FILTER
    // ==============================
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

    function filterCharacters() {
        const selectedBook = bookSelect.value;
        document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)')
            .forEach(el => el.style.display = (selectedBook === 'book1') ? 'block' : 'none');

        document.querySelectorAll('.character-section.book2, .character-card.book2, .character-section.book2 .section-title')
            .forEach(el => el.style.display = (selectedBook === 'book2') ? 'block' : 'none');

        console.log("Characters filtered for:", selectedBook);
    }

    filterCharacters();

    // ==============================
    // 📌 4. IMAGE TOGGLE FUNCTIONALITY (DESKTOP & MOBILE)
    // ==============================
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    document.querySelectorAll(".toggle-image").forEach(image => {
        const defaultSrc = image.getAttribute("data-default");
        const hoverSrc = image.getAttribute("data-hover");

        if (isTouchDevice) {
            // 📌 MOBILE FUNCTIONALITY: Toggle Image on Click
            let toggled = false;
            image.addEventListener("click", function () {
                toggled = !toggled;
                image.src = toggled ? hoverSrc : defaultSrc;
            });
        } else {
            // 📌 DESKTOP FUNCTIONALITY: Hover Effect
            image.addEventListener("mouseenter", function () {
                image.src = hoverSrc;
            });
            image.addEventListener("mouseleave", function () {
                image.src = defaultSrc;
            });
        }
    });

    console.log("✅ Image behavior configured for desktop & mobile.");
});
