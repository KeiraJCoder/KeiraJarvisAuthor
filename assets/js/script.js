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
        img: "../images/Book1.png",
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html"
    },
    {
        title: "Memoirs of a Vampyr's Daughter",
        subtitle: "Wisdom",
        img: "../images/Book2.png",
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
        currentIndex = (currentIndex - 1 + books.length) % books.length;
    }

    updateBookContent();
}

// Attach event listeners for touch events (Mobile Swipe)
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
});

function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
