document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
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
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(e) {
        let valid = true;
        
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
});

document.addEventListener("DOMContentLoaded", function() {
    const books = [
        {
            title: "Memoirs of a Vampyr's Daughter: Eden",
            img: "assets/images/book1.jpg",
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html?q=&page=1&pageSize=4"
        },
        {
            title: "Memoirs of a Vampyr's Daughter: Wisdom",
            img: "assets/images/book2.jpg",
            link: "https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html?srsltid=AfmBOoqc89szRF0NN4mQDt-cXOVDgCn0XVw6IPs5HDWp6zTL-3wjK4Yj&page=1&pageSize=4"
        }
    ];

    let currentIndex = 0;
    const bookCover = document.getElementById("book-cover");
    const bookTitle = document.getElementById("book-title");
    const bookLink = document.getElementById("book-link");

    function updateBook() {
        currentIndex = (currentIndex + 1) % books.length;
        bookCover.src = books[currentIndex].img;
        bookTitle.textContent = books[currentIndex].title;
        bookLink.href = books[currentIndex].link;
    }

    setInterval(updateBook, 4000); // Rotate every 4 seconds
});