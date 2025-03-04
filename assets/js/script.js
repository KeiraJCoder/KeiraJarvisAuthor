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

// === BOOK ROTATION (Smooth Image Transition Without Black Screen) ===
const books = [
    {
        title: "Memoirs of a Vampyr's Daughter: Eden",
        img: "assets/images/Book1.png",
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html?q=&page=1&pageSize=4"
    },
    {
        title: "Memoirs of a Vampyr's Daughter: Wisdom",
        img: "assets/images/Book2.png",
        link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html?srsltid=AfmBOoqc89szRF0NN4mQDt-cXOVDgCn0XVw6IPs5HDWp6zTL-3wjK4Yj&page=1&pageSize=4"
    }
];

let currentIndex = 0;
const bookCover = document.querySelector(".book-cover");
const bookTitle = document.querySelector(".book-title");
const bookLink = document.querySelector(".book-link");

let autoSwitch;

// Function to update book details
function updateBook() {
    currentIndex = (currentIndex + 1) % books.length;
    const newImage = new Image();
    newImage.src = books[currentIndex].img;
    newImage.onload = function () {
        bookCover.src = books[currentIndex].img;
        bookCover.alt = books[currentIndex].title;
        bookTitle.textContent = books[currentIndex].title;
        bookLink.href = books[currentIndex].link;
    };
}

// Start the auto-rotation
function startAutoRotation() {
    if (bookCover && bookTitle && bookLink) {
        autoSwitch = setInterval(updateBook, 4000); // Rotate every 4 seconds
    } else {
        console.warn("Book elements not found. Skipping book rotation.");
    }
}

// Trigger auto-rotation for both mobile and desktop
startAutoRotation();

    

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
