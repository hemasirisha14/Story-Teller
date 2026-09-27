/* =====================================
        STORY TELLER BOOKMARK SYSTEM
        ACCOUNT-SPECIFIC DATA
===================================== */

// Get current logged-in user's email
const currentUserEmail = localStorage.getItem("userEmail");

// Create account-specific storage key
const bookmarkKey = currentUserEmail
    ? "bookmarks_" + currentUserEmail
    : "bookmarks_guest";


const bookmarkButton =
    document.getElementById("bookmarkBtn");

const storyTitle =
    document.getElementById("storyTitle");


// Get bookmarks for current account
let bookmarks =
    JSON.parse(localStorage.getItem(bookmarkKey)) || [];


// Update button when page loads
if (bookmarkButton && storyTitle) {

    let currentStory =
        storyTitle.innerText;

    if (bookmarks.includes(currentStory)) {

        bookmarkButton.innerHTML =
            "🔖 Saved";

    }

}


// Add / Remove Bookmark
if (bookmarkButton) {

    bookmarkButton.addEventListener("click", () => {

        let currentStory =
            storyTitle.innerText;


        if (bookmarks.includes(currentStory)) {

            bookmarks =
                bookmarks.filter(
                    item => item !== currentStory
                );

            bookmarkButton.innerHTML =
                "🔖 Bookmark";

        }

        else {

            bookmarks.push(currentStory);

            bookmarkButton.innerHTML =
                "🔖 Saved";

        }


        // Save for THIS account only
        localStorage.setItem(
            bookmarkKey,
            JSON.stringify(bookmarks)
        );

    });

}


/* =====================================
      GET BOOKMARKS FOR PROFILE PAGE
===================================== */

function getBookmarks() {

    const email =
        localStorage.getItem("userEmail");

    if (!email) {
        return [];
    }

    const key =
        "bookmarks_" + email;

    return JSON.parse(
        localStorage.getItem(key)
    ) || [];

}