function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.shadowBlur = 10;
    context.shadowOffsetX = 15;
    context.shadowOffsetY = 15;
    context.shadowColor = "blue";
    context.fillStyle = "cyan";
    context.fillRect(25, 25, 200, 200);

    context.shadowBlur = 20;
    context.shadowOffsetX = -20;
    context.shadowOffsetY = -20;
    context.shadowColor = "gray";
    context.fillStyle = "magenta";
    context.fillRect(300, 25, 200, 200);
}

window.addEventListener("load", start, false);