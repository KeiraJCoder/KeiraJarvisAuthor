document.addEventListener("DOMContentLoaded", function () {
    // Select all character cards
    const characterCards = document.querySelectorAll(".character-card");

    // Expand character details on click
    characterCards.forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });

    // Optional: Filtering by Book (Add filter buttons if needed)
    const filters = document.querySelectorAll(".filter-button");
    filters.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = this.dataset.filter;
            filterCharacters(filter);
        });
    });

    function filterCharacters(book) {
        characterCards.forEach((card) => {
            if (book === "all" || card.dataset.book === book) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});
