const params = new URLSearchParams(window.location.search);

const genre = params.get("genre") || "fantasy";
const storyIndex = parseInt(params.get("story")) || 0;

const stories = storyData[genre];

let story = null;

if (Array.isArray(stories)) {
    story = stories[storyIndex];
}


// ===============================
// STORY PAGE ELEMENTS
// ===============================

const titleElement = document.getElementById("storyTitle");
const detailsElement = document.querySelector(".story-details");
const storyContent = document.getElementById("storyContent");
const pageNumber = document.getElementById("pageNumber");
const progressBar = document.getElementById("readingProgress");
const nextButton = document.getElementById("nextPage");
const previousButton = document.getElementById("prevPage");


// ===============================
// SHOW STORY
// ===============================

if (story) {

    if (titleElement) {

        titleElement.innerText =
            story.title;

    }


    if (detailsElement) {

        detailsElement.innerHTML = `
            <span>⭐ ${story.rating}</span>
            <span>📖 ${story.pages.length} pages</span>
            <span>${story.genre}</span>
        `;

    }


    let currentPage = 0;


    // ===============================
    // FONT SETTINGS
    // ===============================

    const fontMap = {

        poppins:
            '"Poppins", sans-serif',

        merriweather:
            '"Merriweather", serif',

        playfair:
            '"Playfair Display", serif',

        nunito:
            '"Nunito", sans-serif',

        comic:
            '"Comic Neue", cursive',

        caveat:
            '"Caveat", cursive',

        cinzel:
            '"Cinzel", serif',

        roboto:
            '"Roboto", sans-serif'

    };


    // ===============================
    // TEXT SIZE SETTINGS
    // ===============================

    function getTextSize() {

        const savedSize =
            localStorage.getItem("readingFontSize") ||
            localStorage.getItem("textSize") ||
            "medium";


        const sizeMap = {

            small: "17px",

            medium: "20px",

            large: "24px",

            xlarge: "28px",

            "extra-large": "28px"

        };


        return sizeMap[savedSize] || "20px";

    }


    // ===============================
    // LINE SPACING SETTINGS
    // ===============================

    function getLineSpacing() {

        const savedSpacing =
            localStorage.getItem("readingLineSpacing") ||
            localStorage.getItem("lineSpacing") ||
            "relaxed";


        const spacingMap = {

            compact: "1.7",

            comfortable: "1.9",

            relaxed: "2",

            spacious: "2.3"

        };


        return spacingMap[savedSpacing] || "2";

    }


    // ===============================
    // APPLY READING FORMATTING
    // ===============================

    function applyReadingFormatting() {

        if (!storyContent) return;


        // ===============================
        // APPLY FONT
        // ===============================

        const savedFont =
            localStorage.getItem("readingFont");


        if (
            savedFont &&
            fontMap[savedFont]
        ) {

            const selectedFont =
                fontMap[savedFont];


            storyContent.style.setProperty(
                "font-family",
                selectedFont,
                "important"
            );


            const storyElements =
                storyContent.querySelectorAll("*");


            storyElements.forEach(element => {

                element.style.setProperty(
                    "font-family",
                    selectedFont,
                    "important"
                );

            });

        }


        // ===============================
        // APPLY TEXT SIZE
        // ===============================

        const selectedTextSize =
            getTextSize();


        storyContent.style.setProperty(
            "font-size",
            selectedTextSize,
            "important"
        );


        const storyElements =
            storyContent.querySelectorAll("*");


        storyElements.forEach(element => {

            element.style.setProperty(
                "font-size",
                selectedTextSize,
                "important"
            );

        });


        // ===============================
        // APPLY LINE SPACING
        // ===============================

        const selectedLineSpacing =
            getLineSpacing();


        storyContent.style.setProperty(
            "line-height",
            selectedLineSpacing,
            "important"
        );

    }


    // ===============================
    // SHOW CURRENT PAGE
    // ===============================

    async function showPage() {

        if (!storyContent) return;


        // Original story page
        const originalPage =
            story.pages[currentPage];


        // ===============================
        // GET CURRENT LANGUAGE
        // ===============================

        const selectedLanguage =
            localStorage.getItem("language") || "en";


        // ===============================
        // LOAD STORY
        // ===============================

        if (
            selectedLanguage !== "en" &&
            typeof window.translateStoryHTML === "function"
        ) {

            storyContent.innerHTML = `
                <p>Translating story...</p>
            `;


            try {

                const translatedPage =
                    await window.translateStoryHTML(
                        originalPage,
                        selectedLanguage
                    );


                storyContent.innerHTML =
                    translatedPage;

            }

            catch (error) {

                console.error(
                    "Story translation failed:",
                    error
                );


                // If translation fails,
                // show original story
                storyContent.innerHTML =
                    originalPage;

            }

        }

        else {

            // English
            // Show original story
            storyContent.innerHTML =
                originalPage;

        }


        // ===============================
        // APPLY READING FORMATTING
        // ===============================

        applyReadingFormatting();


        // ===============================
        // PAGE NUMBER
        // ===============================

        if (pageNumber) {

            pageNumber.innerText =
                `Page ${currentPage + 1} / ${story.pages.length}`;

        }


        // ===============================
        // READING PROGRESS
        // ===============================

        if (progressBar) {

            const progress =
                ((currentPage + 1) /
                    story.pages.length) *
                100;


            progressBar.style.width =
                progress + "%";

        }


        // ===============================
        // BUTTON STATES
        // ===============================

        if (previousButton) {

            previousButton.disabled =
                currentPage === 0;

        }


        if (nextButton) {

            nextButton.disabled =
                currentPage ===
                story.pages.length - 1;

        }

    }


    // ===============================
    // SHOW FIRST PAGE
    // ===============================

    showPage();


    // ===============================
    // NEXT PAGE
    // ===============================

    if (nextButton) {

        nextButton.onclick =
            function () {

                if (
                    currentPage <
                    story.pages.length - 1
                ) {

                    currentPage++;


                    showPage();


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }

            };

    }


    // ===============================
    // PREVIOUS PAGE
    // ===============================

    if (previousButton) {

        previousButton.onclick =
            function () {

                if (
                    currentPage > 0
                ) {

                    currentPage--;


                    showPage();


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }

            };

    }


} else {

    // ===============================
    // STORY NOT FOUND
    // ===============================

    if (titleElement) {

        titleElement.innerText =
            "Story Not Found";

    }


    if (storyContent) {

        storyContent.innerHTML = `

            <div class="story-error">

                <h2>Story Not Found</h2>

                <p>
                    Sorry, this story could not be found.
                </p>

            </div>

        `;

    }

}