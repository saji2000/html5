function documentClick(){
    alert("You clicked in the document.");
}

function bubble(e){
    alert("This will bubble");
    e.cancelBubble = false;
}

function noBubble(){
    alerty("this will not bubble");
    e.cancelBubble = true;
}

function registerEvents(){
    document.addEventListener("click", documentClick, false);
    document.getElementById("bubble").addEventListener("click", bubble, false);
    document.getElementById("noBubble").addEventListener("click", noBubble, false);
}

window.addEventListener("load", registerEvents, false);