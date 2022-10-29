var currentNode;
var idcount = 0;

function start(){
    document.getElementById("byIdButton").addEventListener("click", byId, false);
    document.getElementById("insertButton").addEventListener("click", insert, false);
    document.getElementById("appendButton").addEventListener("click", append, false);
    document.getElementById("replaceButton").addEventListener("click", replace, false);
    document.getElementById("removeButton").addEventListener("click", remove, false);
    document.getElementById("parentButton").addEventListener("click", parent, false);
    currentNode = document.getElementById("bigheading");
}

window.addEventListener("load", start, false);

function byId(){
    var id = document.getElementById("gbi").value;
    var target = document.getElementById(id);

    if(target)
        switchTo(target);

}