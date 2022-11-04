var image = new Image();
image.src = "./logo.png";

function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    var pattern = context.createPattern(image, "repeat");

    context.rect(5, 5, 200, 200);
    context.fillStyle = pattern;
    context.fill();
}

window.addEventListener("load", start, false);