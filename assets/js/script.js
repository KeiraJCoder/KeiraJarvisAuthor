document.addEventListener("DOMContentLoaded", function () {
    // === Smooth Scroll for Internal Links ===
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

    const repoName = window.location.hostname.includes("github.io")
        ? "/KeiraJarvisAuthor"
        : "";
    console.log("Repository Name:", repoName);

    // === BOOK CAROUSEL FUNCTIONALITY (Desktop Auto-Rotate & Mobile Swipe) ===
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

    const bookWrapper = document.getElementById("book-wrapper");
    const bookCover = document.getElementById("book-cover");
    const bookLink = document.getElementById("book-link");
    const bookTitle = document.getElementById("book-title");
    const bookSubtitle = document.getElementById("book-subtitle");

    const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile
    let currentIndex = 0;
    let autoRotateInterval;

    // === Preload Images to Prevent Lag on Swipe ===
    function preloadImages() {
        books.forEach(book => {
            const img = new Image();
            img.src = book.img;
        });
    }

    // === Function to Update Book Content Dynamically ===
    function updateBookContent() {
        const book = books[currentIndex];
        bookCover.src = book.img;
        bookCover.alt = book.title + " " + book.subtitle;
        bookLink.href = book.link;
        bookTitle.textContent = book.title;
        bookSubtitle.textContent = book.subtitle;
    }

    // === DESKTOP AUTO-ROTATION FUNCTION ===
    function startAutoRotation() {
        if (!isMobile) {
            autoRotateInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % books.length;
                updateBookContent();
            }, 4000);
        }
    }

    // === MOBILE SWIPE FUNCTIONALITY (Infinite Loop) ===
    let touchStartX = 0;
    let touchEndX = 0;

    // Function to handle swipe gestures
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum swipe distance to trigger

        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe Left → Show Next Book
            currentIndex = (currentIndex + 1) % books.length;
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe Right → Show Previous Book
// === BOOK DATA (Dynamically Injected) ===
const books = [
    {
        title: "Memoirs of a Vampyr's Daughter: Eden",
        subtitle: "Eden",
        img: "assets/images/Book1.png",
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html"
    },
    {
        title: "Memoirs of a Vampyr's Daughter: Wisdom",
        subtitle: "Wisdom",
        img: "assets/images/Book2.png",
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html"
    }
];

// === SELECT DOM ELEMENTS ===
const bookCover = document.getElementById("book-cover");
const bookTitle = document.getElementById("book-title");
const bookSubtitle = document.getElementById("book-subtitle");
const bookLink = document.getElementById("book-link");
const bookWrapper = document.getElementById("book-wrapper");
const swipeIndicator = document.querySelector(".swipe-indicator");

let currentIndex = 0;
let autoRotate; // Store interval reference

// === FUNCTION: UPDATE BOOK DISPLAY ===
function updateBookDisplay(book) {
    // Update Image & Link
    bookCover.src = book.img;
    bookCover.alt = book.title;
    bookLink.href = book.link;

    // Update Title & Subtitle
    bookTitle.innerText = book.title;
    bookSubtitle.innerText = book.subtitle || "";

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

// === FUNCTION: SWITCH TO NEXT BOOK ===
function nextBook() {
    currentIndex = (currentIndex + 1) % books.length;
    updateBookDisplay(books[currentIndex]);
}

// === FUNCTION: AUTO-ROTATE ON DESKTOP ===
function startAutoRotation() {
    if (window.innerWidth > 768) { // Only run on desktop
        autoRotate = setInterval(nextBook, 4000); // Rotate every 4 seconds
    }
}

// === FUNCTION: STOP AUTO-ROTATION ON MOBILE ===
function stopAutoRotation() {
    clearInterval(autoRotate);
}

// === FUNCTION: HANDLE SWIPE EVENTS (MOBILE) ===
function handleSwipe() {
    let startX;

    bookWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX; // Store starting X position
    });

    bookWrapper.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX; // Store ending X position

        if (startX > endX + 50) {
            nextBook(); // Swipe left = Next Book
        } else if (startX < endX - 50) {
            currentIndex = (currentIndex - 1 + books.length) % books.length; // Swipe right = Previous Book
            updateBookDisplay(books[currentIndex]);
        }
    });
}

// === FUNCTION: INITIATE THE BOOK CAROUSEL ===
function initCarousel() {
    updateBookDisplay(books[currentIndex]); // Load first book

    if (window.innerWidth > 768) {
        startAutoRotation(); // Enable auto-rotation on desktop
    } else {
        stopAutoRotation(); // Disable auto-rotation on mobile
        handleSwipe(); // Enable swipe on mobile
    }
}

// === LISTEN FOR SCREEN RESIZE TO SWITCH BETWEEN AUTO-ROTATION & SWIPE ===
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        startAutoRotation(); // Enable auto-rotation when switching to desktop
    } else {
        stopAutoRotation(); // Disable auto-rotation when switching to mobile
    }
});

// === START THE CAROUSEL WHEN PAGE LOADS ===
initCarousel();

    // === CHARACTER EXPANSION (Ensuring One Expansion at a Time) ===
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

    function toggleSection(id) {
        const section = document.getElementById(id);
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

});
