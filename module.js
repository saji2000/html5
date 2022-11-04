

function start()
{
    var canvas = document.getElementById("drawRectangle");
    var context = canvas.getContext("2d");
    var rectangleWidth = 120;
    var rectangleHeight = 60;
    var scaleX = 2;
    var skewY = 0;
    var skewX = 1; 
    var scaleY = 1;
    var translationX = -10;
    var translationY = 30;
    context.translate(canvas.width / 2, canvas.height / 2);
    context.transform(scaleX, skewY, skewX, scaleY, 
       translationX, translationY);
    context.fillStyle = "red";
    context.fillRect(-rectangleWidth / 2, -rectangleHeight / 2, 
       rectangleWidth, rectangleHeight);
}

window.addEventListener( "load", start, false );