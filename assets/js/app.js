const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (toggle) {
        toggle.innerHTML = "☀️";
    }

} else {

    if (toggle) {
        toggle.innerHTML = "🌙";
    }

}


// Theme toggle
if (toggle) {

    toggle.onclick = () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            toggle.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            toggle.innerHTML = "🌙";

        }

    };

}