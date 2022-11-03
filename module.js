function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.shadowBlue = 10;
    context.shadowOffsetX = 15;
    context.shadowOffsetY = 15;
    context.shadowColor = "blue";
    context.fullStyle = "cyan";
    context.fillRect(25, 25, 200, 200);
}

window.addEventListener("load", start, false);