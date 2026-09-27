/* =====================================
        STORY TELLER FAVORITE SYSTEM
        ACCOUNT-SPECIFIC DATA
===================================== */

// Get current logged-in user's email
const currentFavoriteUserEmail =
    localStorage.getItem("userEmail");

// Create account-specific storage key
const favoriteKey =
    currentFavoriteUserEmail
        ? "favorites_" + currentFavoriteUserEmail
        : "favorites_guest";


const favoriteBtn =
    document.getElementById("favoriteBtn");

const favoriteStoryTitle =
    document.getElementById("storyTitle");


/* =====================================
        GET CURRENT FAVORITES
===================================== */

let favorites =
    JSON.parse(
        localStorage.getItem(favoriteKey)
    ) || [];


/* =====================================
        UPDATE BUTTON
===================================== */

if (favoriteBtn && favoriteStoryTitle) {

    const storyTitle =
        favoriteStoryTitle.innerText;

    if (favorites.includes(storyTitle)) {

        favoriteBtn.innerHTML =
            "❤️ Favorited";

    }

}


/* =====================================
        ADD / REMOVE FAVORITE
===================================== */

if (favoriteBtn) {

    favoriteBtn.onclick = function () {

        const storyTitle =
            favoriteStoryTitle.innerText;


        favorites =
            JSON.parse(
                localStorage.getItem(favoriteKey)
            ) || [];


        if (!favorites.includes(storyTitle)) {

            favorites.push(storyTitle);


            localStorage.setItem(
                favoriteKey,
                JSON.stringify(favorites)
            );


            favoriteBtn.innerHTML =
                "❤️ Favorited";


            alert("Added to Favorites ❤️");

        }

        else {

            favorites =
                favorites.filter(
                    story => story !== storyTitle
                );


            localStorage.setItem(
                favoriteKey,
                JSON.stringify(favorites)
            );


            favoriteBtn.innerHTML =
                "🤍 Favorite";


            alert("Removed from Favorites");

        }

    };

}


/* =====================================
      GET FAVORITES FOR PROFILE PAGE
===================================== */

function getFavorites() {

    const email =
        localStorage.getItem("userEmail");

    if (!email) {
        return [];
    }

    const key =
        "favorites_" + email;

    return JSON.parse(
        localStorage.getItem(key)
    ) || [];

}