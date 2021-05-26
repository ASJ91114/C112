Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>"

    });
}
console.log("ml5 version:", ml5.version);
classifer = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function check(){
    image = document.getElementById("capturedImage");
    classifer.classify(image,getResult);
}
function getResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
}
}