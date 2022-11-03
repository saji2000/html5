function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(35, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "mediumslateblue";
    context.fill();

    // draw an arc counterclockwise
    context.beginPath();
    context.arc(110, 50, 30, 0, Math.PI, false); 
    context.stroke();

    // draw a half-circle clockwise
    context.beginPath();
    context.arc(185, 50, 30, 0, Math.PI, true); 
    context.fillStyle = "red";
    context.fill();

    // draw an arc counterclockwise
    context.beginPath();
    context.arc(260, 50, 30, 0, 3 * Math.PI / 2);
    context.strokeStyle = "darkorange";
    context.stroke();
}

window.addEventListener("load", start, false);