/* =====================================
        STORY READING PROGRESS
===================================== */


const progressBar = document.getElementById("readingProgress");

const storyContent = document.getElementById("storyContent");

const storyTitleProgress = document.getElementById("storyTitle");



if(progressBar && storyContent && storyTitleProgress){


const storyName = storyTitleProgress.innerText;



function updateProgress(){


    const storyTop = storyContent.offsetTop;

    const storyHeight = storyContent.offsetHeight;

    const scroll = window.scrollY;


    const currentPosition = scroll - storyTop;


    let progress =
    (currentPosition / storyHeight) * 100;



    if(progress < 0){

        progress = 0;

    }


    if(progress > 100){

        progress = 100;

    }



    progressBar.style.width =
    progress + "%";



    localStorage.setItem(
        "progress_" + storyName,
        Math.round(progress)
    );


}



window.addEventListener(
    "scroll",
    updateProgress
);




// Load saved progress

const savedProgress =
localStorage.getItem("progress_" + storyName);



if(savedProgress){

    progressBar.style.width =
    savedProgress + "%";

}



}