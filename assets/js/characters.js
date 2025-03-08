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

// Open Character Overlay
window.openCharacterOverlay = function (overlayId) {
    const overlay = document.getElementById(overlayId);
    if (!overlay) {
        console.error(`Overlay not found for ID: ${overlayId}`);
        return;
    }

    // Close visible overlays first
    document.querySelectorAll(".character-overlay").forEach((ov) => {
        ov.classList.remove("visible");
    });

    overlay.classList.add("visible");
    console.log("Overlay opened:", overlayId);

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const globalChatButton = document.getElementById('open-chatbot');
    if (globalChatButton) {
        globalChatButton.style.display = 'none';
    }

    // Explicitly hide Sophie's chat container (by removing "visible" class)
    const sophieChatContainer = document.getElementById('chat-container');
    if (sophieChatContainer) {
        sophieChatContainer.classList.remove('visible');
    }

    // Re-show Sophie's open-chat button (if closed)
    const openChatBtn = document.getElementById('open-chat-btn');
    if (openChatBtn) {
        openChatBtn.style.display = 'block';
    }
};

// Close Character Overlay
window.closeCharacterOverlay = function (overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.remove("visible");
        console.log("Overlay closed:", overlayId);

        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        const globalChatButton = document.getElementById('open-chatbot');
        if (globalChatButton) {
            globalChatButton.style.display = 'block';
        }

        // Keep Sophie's chat container hidden until explicitly opened
        const sophieChatContainer = document.getElementById('chat-container');
        if (sophieChatContainer) {
            sophieChatContainer.classList.remove('visible');
        }

        const openChatBtn = document.getElementById('open-chat-btn');
        if (openChatBtn) {
            openChatBtn.style.display = 'block';
        }
    }
};

// Explicit click handlers for chat button
document.getElementById("open-chat-btn").addEventListener("click", function() {
    const chatContainer = document.getElementById("chat-container");
    if(chatContainer) {
        chatContainer.classList.add("visible");
        this.style.display = "none";
    }
});

document.querySelector("#chat-container .minimize-btn").addEventListener("click", function() {
    const chatContainer = document.getElementById("chat-container");
    if(chatContainer) {
        chatContainer.classList.remove("visible");
        const openChatBtn = document.getElementById("open-chat-btn");
        if(openChatBtn){
            openChatBtn.style.display = "block";
        }
    }
});

// Touch Event Fix for Overlays (retain your existing logic)
const allOverlays = document.querySelectorAll(".character-overlay");
allOverlays.forEach(ov => {
    ov.addEventListener("touchmove", function(e) {
        if (ov.scrollHeight > ov.clientHeight) {
            e.stopPropagation();
        }
    }, { passive: false });
});



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
        // Show/hide book1 elements
        document.querySelectorAll('.character-section.book1, .character-card.book1, .section-title:not(.book2)')
            .forEach(el => el.style.display = (selectedBook === 'book1') ? 'block' : 'none');
        // Show/hide book2 elements
        document.querySelectorAll('.character-section.book2, .character-card.book2, .character-section.book2 .section-title')
            .forEach(el => el.style.display = (selectedBook === 'book2') ? 'block' : 'none');
    }

    // ========== IMAGE BEHAVIOR FOR CHARACTERS ==========
    // Determine if the device is a touch device.
    let isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    // Determine mobile view based on viewport width.
    function isMobileView() {
        return window.innerWidth < 768;
    }

    /**
     * Sets up image behavior for a character element.
     *
     * When in mobile view (viewport width < 768), if toggleOnMobile is true,
     * tapping the image toggles its source. When in desktop view, hover events swap the image.
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

        // If on mobile, handle tapping logic
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
            // Desktop or large-screen: attach hover events
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
        { id: "eden-book1-image", defaultSrc: "assets/images/characters/Eden/Eden.webp", hoverSrc: "assets/images/characters/Eden/Eden2.webp", overlayId: "eden-overlay", toggleOnMobile: true },
        { id: "hailzy-image", defaultSrc: "assets/images/characters/Hailzy/Hailzy.png", hoverSrc: "assets/images/characters/Hailzy/Hailzy.webp", overlayId: "hailzy2-overlay", toggleOnMobile: true }
    ];

    // Initializes (or re-initializes) image behaviors for all characters.
    function initImageBehaviors() {
        imageConfigs.forEach(function(config) {
            // Clone & replace to remove old event listeners
            const elem = document.getElementById(config.id);
            if (elem) {
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


document.addEventListener('DOMContentLoaded', function () {
  // Select all details elements in your expandable sections
  const detailsElements = document.querySelectorAll('.expandable-sections details');

  detailsElements.forEach(detail => {
    // Create the close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-details';

    // Style the close button (alternatively, use CSS)
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '5px';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '1.5em';
    closeBtn.style.color = '#d62727';
    closeBtn.style.cursor = 'pointer';

    // Append the close button inside the details element
    detail.appendChild(closeBtn);

    // Close the details when the button is clicked
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      detail.removeAttribute('open');
    });

    // Listen for the toggle event to ensure only one details is open
    detail.addEventListener('toggle', function () {
      if (detail.open) {
        // Loop through all other details and close them
        detailsElements.forEach(otherDetail => {
          if (otherDetail !== detail && otherDetail.hasAttribute('open')) {
            otherDetail.removeAttribute('open');
          }
        });
      }
    });

    // [NEW] Optionally force the first tap to open <details> on mobile
    // If you need it, uncomment below:
    /*
    const summary = detail.querySelector('summary');
    summary.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!detail.open) detail.open = true;
      else detail.open = false;
    });
    */
  });
});
