/* =====================================
        STORY TELLER THEME SWITCHER
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const themeButton =
        document.getElementById("theme-toggle");


    /* =====================================
            LOAD SAVED THEME
    ===================================== */

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (themeButton) {

            themeButton.innerHTML = "☀️";

        }

    }


    /* =====================================
            TOGGLE THEME
    ===================================== */

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark");


            if (document.body.classList.contains("dark")) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                themeButton.innerHTML = "☀️";

            }

            else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                themeButton.innerHTML = "🌙";

            }

        });

    }

});