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

        // === BOOK CAROUSEL FUNCTIONALITY (Desktop Auto-Rotate & Mobile Swipe) ===
const books = [
    {
        title: "Memoirs of a Vampyr's Daughter",
        subtitle: "Eden",
        img: "assets/images/book-images/Book1.png", // Ensure proper string formatting
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html"
    },
    {
        title: "Memoirs of a Vampyr's Daughter",
        subtitle: "Wisdom",
        img: "assets/images/book-images/Book2.png", // Ensure proper string formatting
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html"
    }
];

const bookWrapper = document.getElementById("book-wrapper");
const bookCover = document.getElementById("book-cover");
const bookLink = document.getElementById("book-link");
const bookTitle = document.querySelector("#book-display .book-title");
const bookSubtitle = document.querySelector("#book-display .book-subtitle");

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

// === MOBILE SWIPE FUNCTIONALITY ===
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
        currentIndex = (currentIndex + 1) % books.length;
    } else if (touchEndX - touchStartX > swipeThreshold) {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
    }

    updateBookContent();
}

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
    updateBookContent(); // Ensure first book is displayed
    startAutoRotation();
}

preloadImages();


    // === CHARACTER EXPANSION (Ensuring One Expansion at a Time) ===
    const characterCards = document.querySelectorAll(".character-card");

    if (characterCards.length > 0) {
        characterCards.forEach(card => {
            card.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents event bubbling

                characterCards.forEach(otherCard => {
                    if (otherCard !== this && otherCard.classList.contains("expanded")) {
                        otherCard.classList.remove("expanded");
                    }
                });

                this.classList.toggle("expanded");
            });
        });

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
