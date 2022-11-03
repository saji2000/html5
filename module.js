function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    
    context.beginPath();
    context.moveTo(115, 20);
    context.bezierCurveTo(12, 37, 176, 77, 32, 133);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}

window.addEventListener("load", start, false);