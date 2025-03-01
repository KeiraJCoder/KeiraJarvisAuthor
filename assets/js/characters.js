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
        console.log("Overlay opened:", overlayId);
    };

    // Function to close a specific character's overlay
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
        console.log("Characters filtered for:", selectedBook);
    }
});

// ==========================
// MOBILE / DESKTOP IMAGE BEHAVIOR FOR FAYE & AERYN
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    // Detect if the device supports touch events (i.e. mobile)
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // ----- Faye Image Behavior -----
    const fayeImage = document.getElementById("faye-image");
    if (fayeImage) {
        // Set the default image (override HTML if necessary)
        fayeImage.src = "assets/images/characters/Faye/Faye.webp";
        if (isTouchDevice) {
            // On mobile, toggle the image on touchstart.
            fayeImage.addEventListener("touchstart", function (e) {
                e.preventDefault(); // Prevent default touch behavior
                // Toggle image: if it shows default, switch to alternate; else revert.
                if (fayeImage.src.indexOf("Faye.webp") !== -1) {
                    fayeImage.src = "assets/images/characters/Faye/Faye2.jpg";
                } else {
                    fayeImage.src = "assets/images/characters/Faye/Faye.webp";
                }
            });
        } else {
            // Desktop: use standard hover events.
            fayeImage.addEventListener("mouseenter", function () {
                fayeImage.src = "assets/images/characters/Faye/Faye2.png";
            });
            fayeImage.addEventListener("mouseleave", function () {
                fayeImage.src = "assets/images/characters/Faye/Faye.webp";
            });
        }
    }

    // ----- Aeryn Image Behavior -----
    const aerynImage = document.getElementById("aeryn-image");
    if (aerynImage) {
        // Set the default image to the original face
        aerynImage.src = "assets/images/characters/Aeryn/Aeryn.jpg";
        if (isTouchDevice) {
            // On mobile, toggle the image on touchstart.
            aerynImage.addEventListener("touchstart", function (e) {
                e.preventDefault();
                if (aerynImage.src.indexOf("Aeryn.jpg") !== -1) {
                    aerynImage.src = "assets/images/characters/Aeryn/Aeryn2.png";
                } else {
                    aerynImage.src = "assets/images/characters/Aeryn/Aeryn.jpg";
                }
            });
        } else {
            // Desktop: use hover events.
            aerynImage.addEventListener("mouseenter", function () {
                aerynImage.src = "assets/images/characters/Aeryn/Aeryn2.png";
            });
            aerynImage.addEventListener("mouseleave", function () {
                aerynImage.src = "assets/images/characters/Aeryn/Aeryn.jpg";
            });
        }
    }

    // ----- Prevent Immediate Overlay Opening on Mobile -----
    // Remove inline onclick from card elements and add double-tap detection.
    if (isTouchDevice) {
        // For Aeryn's card (Book 2)
        const aerynCard = document.querySelector(".character-card.book2");
        if (aerynCard) {
            // Remove any inline onclick attribute so our double-tap logic works.
            aerynCard.removeAttribute("onclick");
            let lastTapAeryn = 0;
            aerynCard.addEventListener("touchend", function (e) {
                let currentTime = new Date().getTime();
                let tapLength = currentTime - lastTapAeryn;
                if (tapLength < 500 && tapLength > 0) {
                    // Double-tap detected: open the overlay.
                    openCharacterOverlay("aeryn2-overlay");
                }
                lastTapAeryn = currentTime;
            });
        }
        // For Faye's card (Book 1)
        const fayeCard = document.querySelector(".character-card.book1");
        if (fayeCard) {
            fayeCard.removeAttribute("onclick");
            let lastTapFaye = 0;
            fayeCard.addEventListener("touchend", function (e) {
                let currentTime = new Date().getTime();
                let tapLength = currentTime - lastTapFaye;
                if (tapLength < 500 && tapLength > 0) {
                    openCharacterOverlay("faye-overlay");
                }
                lastTapFaye = currentTime;
            });
        }
    }
});
