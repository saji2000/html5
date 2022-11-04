var canvas = document.getElementById("drawRectangle");
var context = canvas.getContext("2d")

function startRotating()
{
context.translate(canvas.width / 2, canvas.height / 2);
setInterval(rotate, 10);
}

function rotate() 
{
context.clearRect(-100, -100, 200, 200); 
context.rotate(Math.PI / 360);
context.fillStyle = "lime";
context.fillRect(-50, -50, 100, 100);
}

window.addEventListener( "load", startRotating, false );