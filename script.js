var humanCounter = 0;
var human = false;
var skip = 0;

document.addEventListener("DOMContentLoaded", function(){
  var imageCaptcha = document.getElementById("captchaContainer");
  
  imageCaptcha.style.opacity = "1";
});

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
    humanCounter++;
    human = true;
    console.log(humanCounter);
    console.log(human);
  });
});

//HEADPHONES
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage2 = document.getElementById("headphones");
  var dialogueHeadphones = document.getElementById("dialogueHeadphones");

  pressImage2.addEventListener("click", function () {
    pressImage2.style.opacity = "0.2"; 
    dialogueHeadphones.play();
    humanCounter++;
  });
});

//INFO - plays dialogue, dims the button
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var pressImage3 = document.getElementById("info");
  var dialogueInfo = document.getElementById("dialogueInfo");

  pressImage3.addEventListener("click", function () {
    pressImage3.style.opacity = "0.2"; 
    dialogueInfo.play();
    humanCounter++;
  });
});

//BOXES - 
document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.getElementsByClassName("box");
  var dialogueSLWrong = document.getElementById("dialogueStreetlightWrong");
  var dialogueStreetlight = document.getElementById("dialogueStreetlight");
  var dialogueHuman = document.getElementById("dialogueHuman");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      if (human) {
        //NEED TO ADD: MOVE TO NEXT CAPTCHA
          dialogueHuman.play();
      } else {
        if (this === boxes[1] || this === boxes[4] || this === boxes[7]) {
          // Change opacity for boxes 2, 5, and 8
          this.style.opacity = "0.5";
          dialogueStreetlight.play();
        } else {
          this.style.opacity = "0.5";
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
    textCaptcha.style.opacity = "1";
    pressImage4.style.opacity = "0.2";
    dialogueSkip.play();
    skip++;
  });
});

//INFO - plays dialogue, dims the button
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var whatIsThis = document.getElementById("whatIsThis");
  var dialogueWhatIsThis = document.getElementById("dialogueWhatIsThis");

  whatIsThis.addEventListener("click", function () {
    whatIsThis.style.opacity = "0.2"; 
    
    dialogueWhatIsThis.play();
    humanCounter++;
    console.log(humanCounter);
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
        finalCaptcha.style.opacity = "1";
        dialoguePlease.play();
        humanCounter++;
        captchaPasscode.value = "";
        console.log(humanCounter);
    } else {
        if (captchaPasscode.value === correctPasscode2) {
            //dialogueFuckYou.play();
            humanCounter++;
            console.log(humanCounter);
            captchaPasscode.value = "";
        } else {
            dialogueWrongPasscode.play();
        }
    }
}

//SKIP - plays dialogue, changes to next captcha
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the image and hidden text elements
  var skipTwo = document.getElementById("skipTwo");
  var dialogueSkip2 = document.getElementById("dialogueSkip2");
  var textCaptcha = document.getElementById("textCaptchaContainer");
  var finalCaptcha = document.getElementById("finalCaptchaContainer");

  skipTwo.addEventListener("click", function () {
    textCaptcha.style.opacity = "0";
    finalCaptcha.style.opacity = "1";
    skip.style.opacity = "0.2";
    dialogueSkip2.play();
    skip++;
  });
});

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
});

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

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    //dialogueCheckbox.play();
    if (humanCounter >= 5){
    if (humanResults.style.display === 'none' || humanResults.style.display === '') {
          humanResults.style.display = 'flex';
      } else {
          humanResults.style.display = 'flex';
      }
    }
   else {
        if (skip === 2) {
            dialogueSkipResults.play();
          
        } else {
            console.log(humanCounter);
            //dialogueRoboResults.play();
            if (roboResults.style.display === 'none' || roboResults.style.display === '') {
                roboResults.style.display = 'flex';
                roboResults.style.opacity = "1";
            } else {
                roboResults.style.display = 'flex';
            }
        }
    }
}
}
