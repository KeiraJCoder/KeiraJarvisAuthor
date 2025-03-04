document.addEventListener("DOMContentLoaded", function () {

    // ==========================================================
    // === SMOOTH SCROLL FUNCTIONALITY FOR INTERNAL LINKS ===
    // ==========================================================
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // ==========================================================
    // === DETECT REPO NAME FOR GITHUB HOSTING ===
    // ==========================================================
    const repoName = window.location.hostname.includes("github.io")
        ? "/KeiraJarvisAuthor"
        : "";
    console.log("Repository Name:", repoName);

    // ==========================================================
    // === BOOK CAROUSEL FUNCTIONALITY (Desktop Auto-Rotate & Mobile Swipe) ===
    // ==========================================================
    
    // === BOOK DATA ARRAY ===
    const books = [
        {
            title: "Memoirs of a Vampyr's Daughter",
            subtitle: "Eden",
            img: `${repoName}/assets/images/book-images/Book1.png`,
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html"
        },
        {
            title: "Memoirs of a Vampyr's Daughter",
            subtitle: "Wisdom",
            img: `${repoName}/assets/images/book-images/Book2.png`,
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html"
        }
    ];

    // === SELECT DOM ELEMENTS ===
    const bookWrapper = document.getElementById("book-wrapper");
    const bookCover = document.getElementById("book-cover");
    const bookLink = document.getElementById("book-link");
    const bookTitle = document.getElementById("book-title");
    const bookSubtitle = document.getElementById("book-subtitle");

    const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile
    let currentIndex = 0;
    let autoRotateInterval;

    // ==========================================================
    // === PRELOAD BOOK IMAGES TO PREVENT LAG ===
    // ==========================================================
    function preloadImages() {
        books.forEach(book => {
            const img = new Image();
            img.src = book.img;
        });
    }

    // ==========================================================
    // === FUNCTION: UPDATE BOOK CONTENT DYNAMICALLY ===
    // ==========================================================
    function updateBookContent() {
        const book = books[currentIndex];

        // Update Image & Link
        bookCover.src = book.img;
        bookCover.alt = book.title + " " + book.subtitle;
        bookLink.href = book.link;

        // Update Title & Subtitle
        bookTitle.textContent = book.title;
        bookSubtitle.textContent = book.subtitle;

        // Ensure responsive title & subtitle styling
        bookTitle.style.fontSize = "clamp(1.2em, 4vw, 1.8em)";
        bookTitle.style.maxWidth = "90%";
        bookTitle.style.wordWrap = "break-word";
        bookTitle.style.overflowWrap = "break-word";
        bookTitle.style.textAlign = "center";

        bookSubtitle.style.fontSize = "clamp(1em, 3vw, 1.4em)";
        bookSubtitle.style.maxWidth = "90%";

        // Animate transition smoothly
        bookWrapper.style.transition = "opacity 0.5s ease-in-out";
        bookWrapper.style.opacity = 0; // Fade out

        setTimeout(() => {
            bookWrapper.style.opacity = 1; // Fade in after update
        }, 500);
    }

    // ==========================================================
    // === FUNCTION: AUTO-ROTATION (ONLY FOR DESKTOP) ===
    // ==========================================================
    function startAutoRotation() {
        if (!isMobile) {
            autoRotateInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % books.length;
                updateBookContent();
            }, 4000);
        }
    }

    // ==========================================================
    // === FUNCTION: HANDLE MOBILE SWIPE FUNCTIONALITY ===
    // ==========================================================
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum swipe distance to trigger

        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe Left → Show Next Book
            currentIndex = (currentIndex + 1) % books.length;
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe Right → Show Previous Book
            currentIndex = (currentIndex - 1 + books.length) % books.length;
        }

        updateBookContent();
    }

    // === ATTACH SWIPE EVENT LISTENERS (ONLY FOR MOBILE) ===
    if (isMobile) {
        bookWrapper.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        bookWrapper.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        updateBookContent(); // Load first book initially
    } else {
        // Start auto-rotation if not on mobile
        updateBookContent(); // Ensure first book is displayed
        startAutoRotation();
    }

    // Preload images on page load
    preloadImages();

    // ==========================================================
    // === CHARACTER EXPANSION FUNCTIONALITY (Ensuring One Expansion at a Time) ===
    // ==========================================================
    const characterCards = document.querySelectorAll(".character-card");

    if (characterCards.length > 0) {
        characterCards.forEach(card => {
            card.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents event bubbling

                // Collapse all other cards first
                characterCards.forEach(otherCard => {
                    if (otherCard !== this && otherCard.classList.contains("expanded")) {
                        otherCard.classList.remove("expanded");
                    }
                });

                // Toggle the clicked card
                this.classList.toggle("expanded");
            });
        });

        // Clicking outside of character cards collapses all expanded cards
        document.addEventListener("click", function () {
            characterCards.forEach(card => {
                if (card.classList.contains("expanded")) {
                    card.classList.remove("expanded");
                }
            });
        });
    } else {
        console.warn("No character cards found.");
    }

    // ==========================================================
    // === FUNCTION: TOGGLE SECTIONS VISIBILITY ===
    // ==========================================================
    function toggleSection(id) {
        const section = document.getElementById(id);
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

});
