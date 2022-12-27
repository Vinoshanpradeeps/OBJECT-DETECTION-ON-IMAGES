status5 = "";
img5 = "";
object5 = "";

function preload(){
    img5 = loadImage('television.jpeg');
}

function setup(){
    canvas5 = createCanvas(600, 350);
    canvas5.position(750, 180);
    objectDetection5 = ml5.objectDetector('CocoSSD', modelLoadded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function modelLoadded(){
    console.log("Model Loaded");
    status5 = true;
    objectDetection5.detect(img5, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log("error");
    }else{
        console.log(results);
        object5 = results;
    }
}

function draw(){
    image(img5, 0, 0, 200, 350);
    if(status5 != ""){

        for(i = 0; i < object5.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("object_detected").innerHTML = "There are 2 big object from which COCOSSD model has detected 1 object";

            fill("#000000");
            percent = floor(object5[i].confidence * 100);
            text(object5[i].label +" "+ percent +" % ", object5[i].x + 10, object5[i].y + 15);
            noFill();
            stroke("#00ffff");
            rect(object5[i].x, object5[i].y, object5[i].width, object5[i].height);
        }
    }
}