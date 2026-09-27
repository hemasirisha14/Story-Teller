/* =====================================
        STORY TELLER READ ALOUD
===================================== */


let speech = new SpeechSynthesisUtterance();


const listenButton = document.getElementById("listenBtn");

const pauseButton = document.getElementById("pauseBtn");

const resumeButton = document.getElementById("resumeBtn");

const stopButton = document.getElementById("stopBtn");



if(listenButton){


listenButton.onclick=function(){


    const story = document.getElementById("storyContent");


    speech.text = story.innerText;


    speech.rate = 0.9;


    speech.pitch = 1;


    speech.volume = 1;



    speechSynthesis.cancel();


    speechSynthesis.speak(speech);


};



}





if(pauseButton){


pauseButton.onclick=function(){


    speechSynthesis.pause();


};


}





if(resumeButton){


resumeButton.onclick=function(){


    speechSynthesis.resume();


};


}





if(stopButton){


stopButton.onclick=function(){


    speechSynthesis.cancel();


};


}