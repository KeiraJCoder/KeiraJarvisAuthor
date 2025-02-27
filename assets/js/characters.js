document.addEventListener("DOMContentLoaded", function () {
    // Function to open the overlay and load character details
    window.openCharacterOverlay = function(characterId) {
        const characterData = document.getElementById(characterId);
        if (!characterData) {
            console.error(`Character data not found for ID: ${characterId}`);
            return;
        }

        // Get overlay elements
        const overlay = document.getElementById("character-overlay");
        const overlayContent = document.getElementById("overlay-content");

        // Populate the overlay with the character's full details
        overlayContent.innerHTML = characterData.innerHTML;
        
        // Show the overlay
        overlay.classList.add("visible");
    };

    // Function to close the overlay
    window.closeCharacterOverlay = function () {
        const overlay = document.getElementById("character-overlay");
        overlay.classList.remove("visible");

        // Clear overlay content
        setTimeout(() => {
            document.getElementById("overlay-content").innerHTML = "";
        }, 300);
    };
});
