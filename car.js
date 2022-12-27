status2 = "";
img2 = "";
object2 = "";

function preload(){
    img2 = loadImage('Car.jpeg');
}

function setup(){
    canvas2 = createCanvas(300, 325);
    canvas2.position(700, 180);
    objectDetection2 = ml5.objectDetector('CocoSSD', modelLoadded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoadded(){
    console.log("Model Loaded");
    status2 = true;
    objectDetection2.detect(img2, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }else{
        console.log(results);
        object2 = results;
    }
}

function draw(){
    image(img2, 0, 0, 300, 325);
    if(status2 != ""){

        for(i = 0; i < object2.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("object_detected").innerHTML = "There are 2 big object from which COCOSSD model has detected 1 object";

            fill("#000000");
            percent = floor(object2[i].confidence * 100);
            text(object2[i].label +" "+ percent +" % ", object2[i].x + 10, object2[i].y + 15);
            noFill();
            stroke("#00ffff");
            rect(object2[i].x, object2[i].y, object2[i].width, object2[i].height);
        }
    }
}