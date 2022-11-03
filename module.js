function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(35, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "mediumblue";
    context.fill();

    context.beginPath();
    context.arc(110, 50, 30, 0, Math.PI / 2, true);
    context.stroke();
}

window.addEventListener("load", start, false);