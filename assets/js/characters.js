document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Characters.js loaded successfully.");

    // ========== PRELOAD ALTERNATE IMAGES ==========
    function preloadImages(sources) {
        sources.forEach(function(src) {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages([
        "assets/images/characters/Faye/Faye2.png",
        "assets/images/characters/Aeryn/Aeryn2.png",
        "assets/images/characters/Eden/Eden2.webp",
        "assets/images/characters/Blaine/Blaine2.webp"
    ]);

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
    // Determine if the device is a touch device.
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Determine mobile view based on viewport width.
    function isMobileView() {
        return window.innerWidth < 768;
    }

    /**
     * Sets up image behavior for a character element.
     *
     * When in mobile view (viewport width < 768), if toggleOnMobile is true, tapping the image toggles its source.
     * When in desktop view, hover events swap the image.
     *
     * @param {string} imageId - The ID of the image element.
     * @param {string} defaultSrc - The default image source.
     * @param {string} hoverSrc - The alternate image source.
     * @param {string} overlayId - The overlay ID (for reference).
     * @param {boolean} [toggleOnMobile=false] - If true, in mobile view tapping toggles the image.
     */
    function setupCharacterImageBehavior(imageId, defaultSrc, hoverSrc, overlayId, toggleOnMobile = false) {
        const image = document.getElementById(imageId);
        if (!image) return;
        image.src = defaultSrc;

        if (isTouchDevice && isMobileView()) {
            if (toggleOnMobile) {
                image.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent the card's click from firing.
                    if (image.src.indexOf(defaultSrc) !== -1) {
                        image.src = hoverSrc;
                    } else {
                        image.src = defaultSrc;
                    }
                }, { passive: false });
            }
            // If toggleOnMobile is false, tapping the image triggers the card's onclick as usual.
        } else {
            // Desktop (or larger view on touch devices): attach hover events.
            image.addEventListener("mouseenter", function () {
                image.src = hoverSrc;
            });
            image.addEventListener("mouseleave", function () {
                image.src = defaultSrc;
            });
        }
    }

    // Global configuration for all character images.
    const imageConfigs = [
        // Book 2 characters
        { id: "faye-image", defaultSrc: "assets/images/characters/Faye/Faye.webp", hoverSrc: "assets/images/characters/Faye/Faye2.png", overlayId: "faye-overlay", toggleOnMobile: true },
        { id: "aeryn-image", defaultSrc: "assets/images/characters/Aeryn/Aeryn.jpg", hoverSrc: "assets/images/characters/Aeryn/Aeryn2.png", overlayId: "aeryn2-overlay", toggleOnMobile: true },
        { id: "eden-image", defaultSrc: "assets/images/characters/Eden/Eden.webp", hoverSrc: "assets/images/characters/Eden/Eden2.webp", overlayId: "eden2-overlay", toggleOnMobile: true },
        { id: "blaine-image", defaultSrc: "assets/images/characters/Blaine/Blaine.webp", hoverSrc: "assets/images/characters/Blaine/Blaine2.webp", overlayId: "blaine-overlay", toggleOnMobile: true },
        // Book 1 characters
        { id: "aeryn-book1-image", defaultSrc: "assets/images/characters/Aeryn/Aeryn.jpg", hoverSrc: "assets/images/characters/Aeryn/Aeryn2.png", overlayId: "aeryn-overlay", toggleOnMobile: true },
        { id: "blaine-book1-image", defaultSrc: "assets/images/characters/Blaine/Blaine.webp", hoverSrc: "assets/images/characters/Blaine/Blaine2.webp", overlayId: "blaine-overlay", toggleOnMobile: true },
        { id: "eden-book1-image", defaultSrc: "assets/images/characters/Eden/Eden.webp", hoverSrc: "assets/images/characters/Eden/Eden2.webp", overlayId: "eden-overlay", toggleOnMobile: true }
    ];

    // Initializes (or re-initializes) image behaviors for all characters.
    function initImageBehaviors() {
        imageConfigs.forEach(function(config) {
            const elem = document.getElementById(config.id);
            if (elem) {
                // Replace the element with a clone to remove old event listeners.
                const newElem = elem.cloneNode(true);
                elem.parentNode.replaceChild(newElem, elem);
            }
            setupCharacterImageBehavior(config.id, config.defaultSrc, config.hoverSrc, config.overlayId, config.toggleOnMobile);
        });
    }

    // Initialize behaviors on first load.
    initImageBehaviors();

    // ========== HANDLE VIEWPORT CHANGES ==========
    // Reinitialize image behaviors if the window is resized (debounced).
    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            initImageBehaviors();
        }, 200);
    });
});
