

function start()
{
    var canvas = document.getElementById("drawRectangle");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.rect(10, 10, 120, 120);
    context.fillStyle = "purple";
    context.fill();
    context.globalAlpha = 0.9; 
    context.beginPath();
    context.arc(120, 120, 65, 0, 2 * Math.PI, false);
    context.fillStyle = "lime";
    context.fill();
    
}

window.addEventListener( "load", start, false );