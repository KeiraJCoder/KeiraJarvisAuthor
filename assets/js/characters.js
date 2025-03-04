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
        "assets/images/characters/Blaine/Blaine2.webp",
        "assets/images/characters/Hailzy/Hailzy2.webp"
    ]);

    // ========== MODAL ELEMENTS ==========
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

    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    function isMobileView() {
        return window.innerWidth < 768;
    }

    function setupCharacterImageBehavior(imageId, defaultSrc, hoverSrc, overlayId, toggleOnMobile = false) {
        const image = document.getElementById(imageId);
        if (!image) return;
        image.src = defaultSrc;

        if (isTouchDevice && isMobileView()) {
            if (toggleOnMobile) {
                image.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (image.src.indexOf(defaultSrc) !== -1) {
                        image.src = hoverSrc;
                    } else {
                        image.src = defaultSrc;
                    }
                }, { passive: false });
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

    const imageConfigs = [
        { id: "faye-image", defaultSrc: "assets/images/characters/Faye/Faye.webp", hoverSrc: "assets/images/characters/Faye/Faye2.png", overlayId: "faye-overlay", toggleOnMobile: true },
        { id: "aeryn-image", defaultSrc: "assets/images/characters/Aeryn/Aeryn.jpg", hoverSrc: "assets/images/characters/Aeryn/Aeryn2.png", overlayId: "aeryn2-overlay", toggleOnMobile: true },
        { id: "eden-image", defaultSrc: "assets/images/characters/Eden/Eden.webp", hoverSrc: "assets/images/characters/Eden/Eden2.webp", overlayId: "eden2-overlay", toggleOnMobile: true },
        { id: "blaine-image", defaultSrc: "assets/images/characters/Blaine/Blaine.webp", hoverSrc: "assets/images/characters/Blaine/Blaine2.webp", overlayId: "blaine-overlay", toggleOnMobile: true },
        { id: "hailzy-image", defaultSrc: "assets/images/characters/Hailzy/Hailzy.png", hoverSrc: "assets/images/characters/Hailzy/Hailzy.webp", overlayId: "hailzy2-overlay", toggleOnMobile: true }
    ];

    function initImageBehaviors() {
        imageConfigs.forEach(function(config) {
            const elem = document.getElementById(config.id);
            if (elem) {
                const newElem = elem.cloneNode(true);
                elem.parentNode.replaceChild(newElem, elem);
            }
            setupCharacterImageBehavior(config.id, config.defaultSrc, config.hoverSrc, config.overlayId, config.toggleOnMobile);
        });
    }

    initImageBehaviors();

    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            initImageBehaviors();
        }, 200);
    });
});
