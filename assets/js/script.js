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

    // === CHARACTER OVERLAY FUNCTIONALITY ===
    function openCharacterOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.style.display = "block";
            overlay.classList.add("visible");

            document.getElementById("chat-container").style.zIndex = "10001";
        }
    }

    // function closeCharacterOverlay(overlayId) {
    //     const overlay = document.getElementById(overlayId);
    //     if (overlay) {
    //         overlay.style.display = "none";
    //         overlay.classList.remove("visible");
    //     }
    // }

    const characterCards = document.querySelectorAll(".character-card");
    characterCards.forEach(card => {
        card.addEventListener("click", function (event) {
            event.stopPropagation();
            const overlayId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            openCharacterOverlay(overlayId);
        });
    });

    document.querySelectorAll(".character-overlay").forEach(overlay => {
        overlay.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // === Fix for Chat Window Clicks on Mobile ===
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
        chatContainer.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        chatContainer.style.zIndex = "10001";
    }

    const openChatBtn = document.getElementById("open-chat-btn");
    if (openChatBtn) {
        openChatBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            chatContainer.style.display = "block";
            chatContainer.style.opacity = "1";
            openChatBtn.style.display = "none";
        });

        openChatBtn.style.touchAction = "manipulation";
    }

    const minimizeChatBtn = document.getElementById("minimize-chat-btn");
    if (minimizeChatBtn) {
        minimizeChatBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            chatContainer.style.opacity = "0";
            setTimeout(() => {
                chatContainer.style.display = "none";
                openChatBtn.style.display = "block";
            }, 300);
        });
    }

    // === BOOK CAROUSEL FUNCTIONALITY ===
    const books = [
        {
            title: "Memoirs of a Vampyr's Daughter",
            subtitle: "Eden",
            img: "assets/images/book-images/Book1.png",
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html"
        },
        {
            title: "Memoirs of a Vampyr's Daughter",
            subtitle: "Wisdom",
            img: "assets/images/book-images/Book2.png",
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html"
        },
        {
            title: "Memoirs of a Vampyr's Daughter",
            subtitle: "Prophecy",
            img: "assets/images/book-images/book3preview.png",
            link: "#"  // Placeholder link
        }
    ];

    const bookWrapper = document.getElementById("book-wrapper");
    const bookCover = document.getElementById("book-cover");
    const bookLink = document.getElementById("book-link");
    const bookTitle = document.querySelector("#book-display .book-title");
    const bookSubtitle = document.querySelector("#book-display .book-subtitle");

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let currentIndex = 0;
    // let autoRotateInterval;

    function preloadImages() {
        books.forEach(book => {
            const img = new Image();
            img.src = book.img;
        });
    }

    function updateBookContent() {
        const book = books[currentIndex];
        bookCover.src = book.img;
        bookCover.alt = book.title + " " + book.subtitle;
        bookLink.href = book.link;
        bookTitle.textContent = book.title;
        bookSubtitle.textContent = book.subtitle;
    }

    function startAutoRotation() {
        if (!isMobile) {
            autoRotateInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % books.length;
                updateBookContent();
            }, 4000);
        }
    }

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

        updateBookContent();
    } else {
        updateBookContent();
        startAutoRotation();
    }

    preloadImages();
});
