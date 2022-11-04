

function start()
{
    var canvas = document.getElementById("drawRectangle");
    var context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.font = "italic 24px serif";
    context.textBaseline = "top";
    context.fillText("HTML5 Canvas", 0, 0);
    context.font = "bold 30px sans-serif";
    context.textAlign = "center";
    context.lineWidth = 2;
    context.strokeStyle = "navy";
    context.strokeText("HTML5 Canvas", 115, 50);
}

window.addEventListener( "load", start, false );