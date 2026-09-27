/* =====================================
        STORY TELLER SEARCH SYSTEM
===================================== */

const searchInput = document.getElementById("searchBox");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".premium-genre-card");

        cards.forEach(card => {

            const cardText = card.innerText.toLowerCase();

            if (
                searchValue === "" ||
                cardText.includes(searchValue)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}