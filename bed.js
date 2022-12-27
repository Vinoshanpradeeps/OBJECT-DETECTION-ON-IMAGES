status = "";
img = "";
object = "";

function preload(){
    img = loadImage('Bed.jpeg');
}

function setup(){
    canvas = createCanvas(555, 355);
    canvas.position(400, 200)
    objectDetection = ml5.objectDetector('CocoSSD', modelLoadded)
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoadded(){
    console.log("Model Loaded");
    status = true;
    objectDetection.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }else{
        console.log(results);
        object = results;
    }
}

function draw(){
    image(img, 0, 0, 550, 350);
    if(status != ""){

        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("object_detected").innerHTML = "There are 4 big object from which COCOSSD model has detected 1 object";

            fill("#000000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label +" "+ percent +" % ", object[i].x + 10, object[i].y + 15);
            noFill();
            stroke("#00ffff");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}