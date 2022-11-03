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

    context.beginPath(); // begin a new path
    context.moveTo(40, 75); // path origin
    context.lineTo(40, 55); 
    context.lineTo(360, 55); 
    context.lineTo(360, 75); 
    context.lineWidth = 20; // line width
    context.lineJoin = "round" // line join style
    context.lineCap = "round"; // line cap style
    context.strokeStyle = "orange" // line color
    context.stroke(); // draw path

    // green lines with a closed path 
    context.beginPath(); // begin a new path
    context.moveTo(10, 100); // path origin
    context.lineTo(390, 100); 
    context.lineTo(390, 130);
    context.closePath() // close path
    context.lineWidth = 10; // line width
    context.lineJoin = "miter" // line join style
    context.strokeStyle = "green" // line color
    context.stroke(); // draw path

    // blue lines without a closed path 
    context.beginPath(); // begin a new path
    context.moveTo(40, 140); // path origin
    context.lineTo(360, 190); 
    context.lineTo(360, 140);
    context.lineTo(40, 190);
    context.lineWidth = 5; // line width
    context.lineCap = "square"; // line cap style
    context.strokeStyle = "blue" // line color
    context.stroke(); // draw path
}

window.addEventListener("load", start, false);