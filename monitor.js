status3 = "";
img3 = "";
object3 = "";

function preload(){
    img3 = loadImage('Air Conditioner.jpeg');
}

function setup(){
    canvas3 = createCanvas(200, 350  );
    canvas3.position(750, 180);
    objectDetection3 = ml5.objectDetector('CocoSSD', modelLoadded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoadded(){
    console.log("Model Loaded");
    status3 = true;
    objectDetection3.detect(img3, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }else{
        console.log(results);
        object3 = results;
    }
}

function draw(){
    image(img3, 0, 0, 200, 350);
    if(status3 != ""){

        for(i = 0; i < object3.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("object_detected").innerHTML = "There are 2 big object from which COCOSSD model has detected 1 object";

            fill("#000000");
            percent = floor(object3[i].confidence * 100);
            text(object3[i].label +" "+ percent +" % ", object3[i].x + 10, object3[i].y + 15);
            noFill();
            stroke("#00ffff");
            rect(object3[i].x, object3[i].y, object3[i].width, object3[i].height);
        }
    }
}