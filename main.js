var previousresult = '';
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    speak("javas cript is loaded")
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded() {
    console.log('Model Loaded');
}
function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    //if (error) {
    //    console.error(error);
   // } else {
   //     if ((results[0].confidence > 0.5) && (previousresult != results[0].label)) {
   //         console.log(results);
   //         previousresult = results[0].label;
   //         speak(previousresult);
  //          document.getElementById("result_object_name").innerHTML = results[0].label;
  //          document.getElementById("result_accuracy_name").innerHTML = results[0].confidence;
 //       }
 //   }
    console.log(results);
   // previousresult = results[0].label;
    //speak(previousresult);
    document.getElementById("outputofgooglelens").innerHTML = results[0].label;
    document.getElementById("outputofmobilenet").innerHTML = results[1].label;
}
function speak(speakdata) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(speakdata));
}



