status4 = "";
img4 = "";
object4 = "";

function preload(){
    img4 = loadImage('Study Table.jpeg');
}

function setup(){
    canvas4 = createCanvas(600, 350);
    canvas4.position(700, 180);
    objectDetection4 = ml5.objectDetector('CocoSSD', modelLoadded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoadded(){
    console.log("Model Loaded");
    status4 = true;
    objectDetection4.detect(img4, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }else{
        console.log(results);
        object4 = results;
    }
}

function draw(){
    image(img4, 0, 0, 300, 350);
    if(status4 != ""){

        for(i = 0; i < object4.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("object_detected").innerHTML = "There are 2 big object from which COCOSSD model has detected 1 object";

            fill("#000000");
            percent = floor(object4[i].confidence * 100);
            text(object4[i].label +" "+ percent +" % ", object4[i].x + 10, object4[i].y + 15);
            noFill();
            stroke("#00ffff");
            rect(object4[i].x, object4[i].y, object4[i].width, object4[i].height);
        }
    }
}