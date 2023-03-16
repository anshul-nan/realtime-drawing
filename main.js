noseX = 0;
noseY = 0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.hide();
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);


}
function draw(){
    background("#354f52");
    fill("#8338ec");
    stroke("#8338ec");
    square(noseX,noseY,difference);
}

function modelLoaded()
{
    console.log('posenet is Intialized');
}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        noseX =results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x-"+noseX+ "nose y-"+noseY)
        leftWristX=results[0].pose.leftWrist.x;
        
        rightWristX =results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("difference -" + difference+ "left wrist x - "+ leftWristX+"rightWrist x - "+ rightWristX);
    }
}
