document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

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

// === BOOK ROTATION (Desktop Auto-Switch, Mobile Swipe) ===
const books = document.querySelectorAll(".book-item"); // Select both books
const bookWrapper = document.getElementById("book-wrapper"); // Wrapper for swiping
const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile

let currentIndex = 0;
let autoRotateInterval; // To store the auto-rotation interval

// === Desktop Auto-Rotation Function ===
function updateBook() {
    if (isMobile) return; // Stop auto-rotation on mobile

    books.forEach((book, index) => {
        book.style.display = index === currentIndex ? "block" : "none";
    });

    currentIndex = (currentIndex + 1) % books.length;
}

// === Start Auto-Rotation for Desktop ===
function startAutoRotation() {
    if (!isMobile) {
        updateBook(); // Ensure correct book is shown initially
        autoRotateInterval = setInterval(updateBook, 4000); // Rotate every 4 seconds
    }
}

// === Mobile Swipe Functionality ===
let touchStartX = 0;
let touchEndX = 0;

// Function to handle swipe gestures
function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance to trigger

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe Left → Next Book
        currentIndex = (currentIndex + 1) % books.length;
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe Right → Previous Book
        currentIndex = (currentIndex - 1 + books.length) % books.length;
    }

    updateMobileBook();
}

// Function to update books on mobile swipe
function updateMobileBook() {
    bookWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event Listeners for Mobile Swiping
if (isMobile) {
    bookWrapper.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    bookWrapper.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });
} else {
    // Start auto-rotation if not on mobile
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
