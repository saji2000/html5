var image = new Image();
image.src = "./logo.png";

function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, 175, 175);
}

window.addEventListener("load", start, false);