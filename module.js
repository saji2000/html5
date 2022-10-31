function start(){
    var inputColor = prompt("Enter a color name for the background", "");
    document.body.setAttribute("style", "background-color: " + inputColor);

}

window.addEventListener("load", start, false);