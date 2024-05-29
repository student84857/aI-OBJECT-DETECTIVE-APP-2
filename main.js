status = "";
video = "";
value = "";

function setup()
{
  canvas = createCanvas(345,280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(345,320);
}

function draw()
{
    image(video,0,0,345,280);
}

function start()
{
    ObjectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value = document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model loaded");
    status = true;
}