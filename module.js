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

function insert(){
    var newNode = createNewNode(document.getElementById("ins").value);
    currentNode.parentNode.insertBefore(newNode, currentNode);
    switchTo(newNode);
}

function appendNode(){
    var newNode = createNewNode(document.getElementById("append").value);
    currentNode.appendChild(newNode);
    switchTo(newNode);
}

function replaceCurrent(){
    var newNode = createNewNode(document.getElementById("replace").value);
    currentNode.parentNode.replaceChild(newNode, currentNode);
    switchTo(newNode);
}

function remove(){
    if (currentNode.parentnode == document.body){
        alert("can't remove a top-level element");
    }
    else{
        var oldNode = currentNode;
        switchTo(oldNode.parentNode);
        currentNode.removeChild(oldNode);
    }
}

function parent(){
    target = currentNode.parentNode;

    if(target != document.body)
        switchTo(target);
    else
        alert("no parent element");
}


function createNewNode(){
    var newNode = document.createElement("p");

    nodeId = "new" + idcount;
    ++idcount;
    newNode.setAttribute("id", nodeId);
    text = "[" + nodeId + "]" + text;
    newNode.appendChild(document.createTextNode(text));
    return newNode;
}

function switchTo(newNode){
    currentNode.setAttribute("class", ""); 
    currentNode = newNode;
    currentNode.setAttribute("class", "highlighted"); 
    document.getElementById("gbi").value = currentNode.getAttribute("id");
}