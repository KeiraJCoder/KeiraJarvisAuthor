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

    // === FORM VALIDATION (Only if form exists) ===
    const form = document.querySelector("form");
    if (form) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        form.addEventListener("submit", function (e) {
            let valid = true;

            if (!nameInput || !emailInput || !messageInput) {
                console.error("Form fields not found.");
                return;
            }

            if (nameInput.value.trim() === "") {
                alert("Please enter your name.");
                valid = false;
            }

            if (!emailInput.value.includes("@") || emailInput.value.trim() === "") {
                alert("Please enter a valid email.");
                valid = false;
            }

            if (messageInput.value.trim() === "") {
                alert("Please enter a message.");
                valid = false;
            }

            if (!valid) {
                e.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

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
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html"
        }
    ];

    let currentIndex = 0;
    const bookCover = document.querySelector(".book-cover");
    const bookTitle = document.querySelector(".book-title");
    const bookLink = document.querySelector(".book-link");
    const bookContainer = document.getElementById("book-carousel");
    let autoSwitch;

    // Function to update book details
    function updateBook(index) {
        currentIndex = index;
        bookCover.src = books[currentIndex].img;
        bookCover.alt = books[currentIndex].title;
        bookTitle.textContent = books[currentIndex].title;
        bookLink.href = books[currentIndex].link;
    }

    // Auto-rotate books on desktop
    function startAutoRotation() {
        autoSwitch = setInterval(() => {
            updateBook((currentIndex + 1) % books.length);
        }, 4000);
    }

    // Stop auto rotation when interacting on mobile
    function stopAutoRotation() {
        clearInterval(autoSwitch);
    }

    // Detect mobile device
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (touchStartX - touchEndX > 50) {
            // Swiped left (next book)
            updateBook((currentIndex + 1) % books.length);
        } else if (touchEndX - touchStartX > 50) {
            // Swiped right (previous book)
            updateBook((currentIndex - 1 + books.length) % books.length);
        }
    }

    // Tap-to-switch on mobile
    function handleBookTap(e) {
        e.preventDefault(); // Prevent immediate link navigation
        updateBook((currentIndex + 1) % books.length);
    }

    // Attach event listeners
    if (bookCover) {
        if (isMobile()) {
            stopAutoRotation();
            bookContainer.addEventListener("touchstart", handleTouchStart);
            bookContainer.addEventListener("touchmove", handleTouchMove);
            bookContainer.addEventListener("touchend", handleTouchEnd);
            bookContainer.addEventListener("click", handleBookTap);
        } else {
            startAutoRotation();
        }
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
