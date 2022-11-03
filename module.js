function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.fillStyle = 'yellow';
    context.fillRect(5, 10, 200, 75);
    context.strokeStyle = 'royalblue';
    context.lineWidth = 6;
    context.strokeRect(4, 9, 201, 76);
}

window.addEventListener("load", start, false);