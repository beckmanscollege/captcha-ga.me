var humanCounter = 0;
var human = false;
var skip = 0;
var infoPressed = false;
var headphonesPressed = false;
var replayPressed = false;

document.addEventListener("DOMContentLoaded", function(){
  var imageCaptcha = document.getElementById("captchaContainer");
  
  imageCaptcha.style.opacity = "1";
});

var mediaStream;

//REPLAY BUTTON - toggles webcam feed, plays dialogue, dims button
//adds human point, toggles human var.
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage = document.getElementById("replay");
  var hiddenFeeds = document.getElementsByClassName("webcam");
  var hiddenStreetlight = document.getElementsByClassName("streetlight");
  var dialogueReplay = document.getElementById("dialogueReplay");
  var imageP = document.getElementById("imageP");
  var box = document.getElementsByClassName("box");
  


  pressImage.addEventListener("click", function () {
    
    //WEBCAM FEED
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    mediaStream = stream;
  
    // Set the source of the first video element
    var video1 = document.getElementById("video1");
    video1.srcObject = stream;

    // Clone the stream for the second video element
    var streamClone = stream.clone();
    var video2 = document.getElementById("video2");
    video2.srcObject = streamClone;

    var streamClone = stream.clone();
    var video3 = document.getElementById("video3");
    video3.srcObject = streamClone;

    var streamClone = stream.clone();
    var video4 = document.getElementById("video4");
    video4.srcObject = streamClone;

    var streamClone = stream.clone();
    var video5 = document.getElementById("video5");
    video5.srcObject = streamClone;

    var streamClone = stream.clone();
    var video6 = document.getElementById("video6");
    video6.srcObject = streamClone;

    var streamClone = stream.clone();
    var video7 = document.getElementById("video7");
    video7.srcObject = streamClone;

    var streamClone = stream.clone();
    var video8 = document.getElementById("video8");
    video8.srcObject = streamClone;

    var streamClone = stream.clone();
    var video9 = document.getElementById("video9");
    video9.srcObject = streamClone;
  })
  .catch(function (error) {
    console.log("getUserMedia error: ", error);
  });
    
    //RESETS BOX OPACITY
    for (var i = 0; i < box.length; i++) {
      if (box[i].style.opacity == "0.5") {
        box[i].style.opacity = "1";
      }
    }
    
    //WEBCAM TRANSITION
    for (var i = 0; i < hiddenFeeds.length; i++) {
      if (hiddenFeeds[i].classList.contains("active")) {
        hiddenFeeds[i].classList.add("active");
      } else {
        hiddenFeeds[i].classList.add("active");
      }
    }
    
    //STREETLIGHT TRANSITION
    for (var i = 0; i < hiddenStreetlight.length; i++) {
      if (hiddenStreetlight[i].classList.contains("active")) {
        hiddenStreetlight[i].classList.add("active");
      } else {
        hiddenStreetlight[i].classList.add("active");
      }
    }
    
    
    //CHANGES TEXT CONTENT
    imageP.textContent = "Click on all images containing a human";
    
    //CHANGES OPACITY OF REPLAY BUTTON
    pressImage.style.opacity = "0.2";
    
    //PAUSES PREVIOUS AUDIO
    document.querySelectorAll('audio').forEach(audio => audio.pause());

    // Play the replay dialogue
    dialogueReplay.play();
    human = true;
    console.log(humanCounter);
    console.log(human);
    if (replayPressed == false) {
        humanCounter++;
        replayPressed = true; }
  });
});

// Function to turn off the webcam
function turnOffWebcam() {
  // Check if mediaStream is defined
  if (mediaStream) {
    // Get all video elements and stop their tracks
    document.querySelectorAll('video').forEach(video => {
      var tracks = video.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    });

    // Reset source objects
    document.querySelectorAll('video').forEach(video => {
      video.srcObject = null;
    });

    // Set mediaStream to null
    mediaStream = null;
  }
}

//HEADPHONES
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage2 = document.getElementById("headphones");
  var dialogueHeadphones = document.getElementById("dialogueHeadphones");

  pressImage2.addEventListener("click", function () {
    pressImage2.style.opacity = "0.2";
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    dialogueHeadphones.play();
    if (headphonesPressed == false) {
        humanCounter++;
        headphonesPressed = true; }
  });
});

//INFO - plays dialogue, dims the button
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage3 = document.getElementById("info");
  var dialogueInfo = document.getElementById("dialogueInfo");

  pressImage3.addEventListener("click", function () {
    pressImage3.style.opacity = "0.2";
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    dialogueInfo.play();
      if (infoPressed == false) {
        humanCounter++;
        infoPressed = true; }  });
});

//BOXES - 
document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.getElementsByClassName("box");
  var dialogueSLWrong = document.getElementById("dialogueStreetlightWrong");
  var dialogueStreetlight = document.getElementById("dialogueStreetlight");
  //var dialogueHuman = document.getElementById("dialogueHuman");
  var textCaptcha = document.getElementById("textCaptchaContainer");
  var imageCaptcha = document.getElementById("captchaContainer");
  
  var clickedBoxes = {
  1: false,
  4: false,
  7: false
};

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      if (human) {
        //NEED TO ADD: MOVE TO NEXT CAPTCHA
          //dialogueHuman.play();
          imageCaptcha.style.opacity = "0";
          textCaptcha.style.display = "inline";

              setTimeout(function() {
             imageCaptcha.style.display = "none";
             textCaptcha.style.opacity = "1";
          }, 500);
          turnOffWebcam();
        
      } else {
        if (this === boxes[1] || this === boxes[4] || this === boxes[7]) {
          // Change opacity for boxes 2, 5, and 8
          this.style.opacity = "0.5";
          //document.querySelectorAll('audio').forEach(audio => audio.pause());
          //dialogueStreetlight.play();
          clickedBoxes[this.dataset.boxNumber] = true;
          
          
          if (clickedBoxes[1] && clickedBoxes[4] && clickedBoxes[7]) {
          document.querySelectorAll('audio').forEach(audio => audio.pause());
          dialogueStreetlight.play();
            setTimeout(function(){
            imageCaptcha.style.opacity = "0";
            textCaptcha.style.display = "inline";

              setTimeout(function() {
             imageCaptcha.style.display = "none";
             textCaptcha.style.opacity = "1";
          }, 500);}, 200);}
            
        } else {
          this.style.opacity = "0.5";
          document.querySelectorAll('audio').forEach(audio => audio.pause());
          dialogueSLWrong.play();
        }
      }
    });
  }
});

  
//SKIP - plays dialogue, changes to next captcha
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage4 = document.getElementById("skip");
  var dialogueSkip = document.getElementById("dialogueSkip");
  var imageCaptcha = document.getElementById("captchaContainer");
  var textCaptcha = document.getElementById("textCaptchaContainer");

  pressImage4.addEventListener("click", function () {
    
    imageCaptcha.style.opacity = "0";
    textCaptcha.style.display = "flex";

        setTimeout(function() {
       imageCaptcha.style.display = "none";
       textCaptcha.style.opacity = "1";
    }, 500);
    turnOffWebcam();
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    dialogueSkip.play();
    skip++;
    console.log(skip);
  });
});

//TEXT CAPTCHA FROM HERE ON OUT

//PASSCODE, changes to next captcha
const captchaPasscode = document.getElementById("captchaPasscode");
const correctPasscode1 = "please";
const correctPasscode2 = "fuck you";
var dialoguePlease = document.getElementById("dialoguePlease");
var dialogueFuckYou = document.getElementById("dialogueFuckYou");
var dialogueWrongPasscode = document.getElementById("dialogueWrongPasscode");

captchaPasscode.addEventListener("keydown", function(event) {
    var resultMessage = document.getElementById("resultMessage");

    if (event.key === "Enter") {
        console.log(skip);
        event.preventDefault();
        submitForm();
    }
});

var textCaptcha = document.getElementById("textCaptchaContainer");
var finalCaptcha = document.getElementById("finalCaptchaContainer");

function submitForm() {
    if (captchaPasscode.value === correctPasscode1) {
        textCaptcha.style.opacity = "0";
        finalCaptcha.style.display = "flex";

        setTimeout(function() {
       textCaptcha.style.display = "none";
       finalCaptcha.style.opacity = "1";
    }, 2500);
        document.querySelectorAll('audio').forEach(audio => audio.pause());
        dialoguePlease.play();
        humanCounter++;
        captchaPasscode.value = "";
        console.log(humanCounter);
    } else {
        if (captchaPasscode.value === correctPasscode2) {
            document.querySelectorAll('audio').forEach(audio => audio.pause());
            dialogueFuckYou.play();
            textCaptcha.style.opacity = "0";
            finalCaptcha.style.display = "flex";

            setTimeout(function() {
           textCaptcha.style.display = "none";
           finalCaptcha.style.opacity = "1";
        }, 2500);
            humanCounter++;
            console.log(humanCounter);
            captchaPasscode.value = "";
        } else {
            document.querySelectorAll('audio').forEach(audio => audio.pause());
            dialogueWrongPasscode.play();
        }
    }
}

//INFO - plays dialogue, dims the button
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var whatIsThis = document.getElementById("whatIsThis");
  var whatIsThisPressed = false;
  var dialogueWhatIsThis = document.getElementById("dialogueWhatIsThis");

  whatIsThis.addEventListener("click", function () {
    whatIsThis.style.opacity = "0.2"; 
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    dialogueWhatIsThis.play();
    if (whatIsThisPressed == false) {
        humanCounter++;
        whatIsThisPressed = true; };
  });
});

//SKIP - plays dialogue, changes to next captcha
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var skipTwo = document.getElementById("skipTwo");
  var dialogueSkip2 = document.getElementById("dialogueSkipTwo");
  var textCaptcha = document.getElementById("textCaptchaContainer");
  var finalCaptcha = document.getElementById("finalCaptchaContainer");

  skipTwo.addEventListener("click", function () {
    textCaptcha.style.opacity = "0";
    finalCaptcha.style.display = "flex";

    setTimeout(function() {
   textCaptcha.style.display = "none";
   finalCaptcha.style.opacity = "1";
}, 500);
    skipTwo.style.opacity = "0.2";
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    dialogueSkip2.play();
    skip++;
    console.log(skip);
  });
});
/*
//SKIP - plays dialogue, changes to next captcha
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var skip2 = document.getElementById("skip2");
  var dialogueSkip2 = document.getElementById("dialogueSkip2");

  skip2.addEventListener("click", function () {
    console.log(skip);
    skip2.style.opacity = "0.2";
    dialogueSkip2.play();
    skip++;
  });
});*/

//FINAL CAPTCHA FROM HERE ON OUT

function finalCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("notARobot");
  var dialogueHumanResults = document.getElementById("dialogueHumanResults");
  var dialogueRoboResults = document.getElementById("dialogueRoboResults");
  var dialogueSkipResults = document.getElementById("dialogueSkipResults");
  var dialogueCheckbox = document.getElementById("dialogueCheckbox");
  var dialogueUnsure = document.getElementById("dialogueUnsure");
  var humanResults = document.getElementById("humanResults");
  var roboResults = document.getElementById("roboResults");
  var skipResults = document.getElementById("skipResults");
  var humanCounterSpan = document.getElementById("humanCounterSpan");
  var humanCounterSpan2 = document.getElementById("humanCounterSpan2");
  
  humanCounterSpan.textContent = humanCounter;
  humanCounterSpan2.textContent = humanCounter;

  // If the checkbox is checked, display the output text
    if (checkBox.checked) {
    if (humanCounter >= 5) {
        document.querySelectorAll('audio').forEach(audio => audio.pause());
        dialogueHumanResults.play();
        humanResults.style.display = 'flex';
        humanResults.style.opacity = "1";
    } else {
        if (skip == 2) {
            document.querySelectorAll('audio').forEach(audio => audio.pause());
            dialogueSkipResults.play();
            skipResults.style.display = 'flex';
            skipResults.style.opacity = "1";
        } else {
            console.log(humanCounter);
            document.querySelectorAll('audio').forEach(audio => audio.pause());
            dialogueRoboResults.play();
            roboResults.style.display = 'flex';
            roboResults.style.opacity = "1";
        }
    }
}
}