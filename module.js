var image = new Image();
image.src = "./logo.png";

function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(1, 3);
    context.beginPath();
    context.arc(0, 0, 30, 0, 2 * Math.PI, true);
    context.fillStyle = "orange";
    context.fill();
}

window.addEventListener("load", start, false);