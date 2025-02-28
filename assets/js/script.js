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

    // === BOOK ROTATION (Fixing Layout Jumping & Smooth Transitions) ===
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
    const bookCover = document.getElementById("book-cover");
    const bookTitle = document.getElementById("book-title");
    const bookLink = document.getElementById("book-link");

    if (bookCover && bookTitle && bookLink) {
        function updateBook() {
            currentIndex = (currentIndex + 1) % books.length;

            // Apply a fade-out effect before changing the image
            bookCover.style.opacity = "0";

            setTimeout(() => {
                bookCover.src = books[currentIndex].img;
                bookTitle.textContent = books[currentIndex].title;
                bookLink.href = books[currentIndex].link;

                // Fade-in effect after image change
                bookCover.style.opacity = "1";
            }, 400);
        }

        setInterval(updateBook, 4000); // Rotate every 4 seconds
    } else {
        console.warn("Book elements not found. Skipping book rotation.");
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
