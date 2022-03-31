noseX=0;
noseY=0;
function preload(){
mus_mouth=loadImage('https://i.postimg.cc/xT8q9KYJ/download-mustache-free-png-transparent-image-and-clipart-75561-removebg-preview.png')
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
image(video,0,0,300,300);
image(mus_mouth,noseX-37,noseY-10, 80, 40);
}
function take_snapshot(){
    save('FunnyNoseFilter.png');
}
function modelLoaded()
{
console.log('PoseNet is Intialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log('nose x = '+results[0].pose.nose.x) ; 
      console.log('nose y = '+results[0].pose.nose.y) ;
    }
}