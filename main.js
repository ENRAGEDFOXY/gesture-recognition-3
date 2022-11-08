noseX=0;
noseY=0;
Difference=0;
LwristX=0;
RwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(790, 110);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    background("orange");
    fill("black");
    stroke("black");
    square(noseX, noseY, Difference);
    document.getElementById("squareSize").innerHTML="Width and Height of ze Square is " + Difference + " Pixels. :>"
}

function modelLoaded(){
    console.log("ze model is fully charged 👌🗿👍");
}

function gotPoses(results){ 
    if(results.length > 0){      
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX + " , noseY = " + noseY + " E.");

        LwristX=results[0].pose.leftWrist.x;
        RwristX=results[0].pose.rightWrist.x; 

        Difference=floor(LwristX - RwristX);

        console.log("Left Wrist is " + LwristX + "and since we save the best for the last, Right Wrist is " + RwristX + "and Difference is " + Difference + " .");
    }
}
