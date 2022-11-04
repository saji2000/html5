

function start()
{
    var canvas = document.getElementById("drawRectangle");
    var context = canvas.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener( "load", start, false );