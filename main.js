var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds"
    var speak_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_this);
    Webcam.attach( 'camera' );
    setTimeout(function (){
        take_snapshot();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_img" src = "'+ data_uri +'">';
    }); 
}
function save() {
    image = document.getElementById("selfie_img").src;
    link = document.getElementById("link");
    link.href = image;
    link.click();
}