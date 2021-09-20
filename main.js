function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(40,135);

    canvas = createCanvas(550, 500);
    canvas.position(800,135);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function draw() {
    background('black');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}