img="";
status="";

function preload() {
    img=loadImage('dog_cat.jpg');
}
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0,0,640,420);
    fill("#d4af37");
    text("dog",45,75);
    noFill();
    stroke("#d4af37");
    rect(30,60,450,350);

    fill("#y7js93");
    text("cat",320,120);
    noFill();
    stroke("#y7js93");
    rect(300,90,270,320);
}