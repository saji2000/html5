function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(390, 10);
    context.lineTo(390, 30);
    context.lineTo(10, 30);
    context.lineWidth = 10;
    context.lineJoin = "bevel";
    context.lineCap = "round";
    context.strokeStyle = "purple";
    context.stroke();
}

window.addEventListener("load", start, false);