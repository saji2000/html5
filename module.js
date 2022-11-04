function start(){
    var canvas = document.getElementById('drawRectangle');
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0, 0, 0, 200);

    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, "black");
    gradient.addColorStop(1, "blue");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 200, 200);

    var canvas = document.getElementById('drawRectangle2');
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0, 200, 0, 0);

    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, "black");
    gradient.addColorStop(1, "blue");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 200, 200);
}

window.addEventListener("load", start, false);