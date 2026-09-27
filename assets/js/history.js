/* =====================================
        STORY TELLER READING HISTORY
        ACCOUNT-SPECIFIC DATA
===================================== */

const historyContainer =
    document.getElementById("readingHistory");


if (historyContainer) {

    const userEmail =
        localStorage.getItem("userEmail");


    if (!userEmail) {

        historyContainer.innerHTML =
            "<p>Please login to see your reading history.</p>";

    }

    else {

        const historyKey =
            "readingHistory_" + userEmail;


        const history =
            JSON.parse(
                localStorage.getItem(historyKey)
            ) || [];


        if (history.length === 0) {

            historyContainer.innerHTML =
                "<p>No stories read yet.</p>";

        }

        else {

            historyContainer.innerHTML = "";


            history.forEach(title => {

                historyContainer.innerHTML += `

                    <div class="history-card">

                        📖 ${title}

                    </div>

                `;

            });

        }

    }

}