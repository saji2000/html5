function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    
    context.beginPath();
    context.moveTo(15, 5);
    context.lineTo(95, 5);
    context.quadraticCurveTo(105, 5, 105, 15);
    context.lineTo(15, 105);
    context.quadraticCurveTo(105, 105, 95, 105);
    context.lineTo(5, 15);
    context.quadraticCurveTo(5, 105, 15, 5);
    context.closePath();
    context.fillStyle = "yellow";
    context.fill();context.strokeStyle = "blue";
    context.lineWidth = 1;
    context.stroke();
}

window.addEventListener("load", start, false);